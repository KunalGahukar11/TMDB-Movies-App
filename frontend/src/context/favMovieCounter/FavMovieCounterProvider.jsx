import React, { useEffect, useState } from 'react'
import FavMovieCounterContext from "./FavMovieCounterContext";

const FavMovieCounterProvider = ({ children }) => {
    const [favMovies, setFavMovies] = useState([]);
    const [alreadyThere, setAlreadyThere] = useState(false);
    const [addedThere, setAddedThere] = useState(false);
    const [favMoviesCount, setFavMoviesCount] = useState(0);
    const [favMovieData, setFavMovieData] = useState([]);
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
        setFavMovies(data);
        setIsFav(false);

        setFavMoviesCount(data.length);
        setFavMovieData(data);
    }, []);

    useEffect(() => {
        setFavMoviesCount(favMovies.length);
    }, [favMovies]);

    const handleAddToFav = (movie) => {
        let duplicateEntry = favMovies.some((fav) => {
            return fav.id === movie.id;
        });

        if (duplicateEntry) {
            setAlreadyThere(true);
            return;
        }

        let updatedArr = [...favMovies, movie];
        setFavMovies(updatedArr);
        setIsFav(true);

        setAddedThere(true);
        localStorage.setItem("favouriteMovies", JSON.stringify(updatedArr));
    };

    const handleClose = () => {
        if (alreadyThere) { setAlreadyThere(false) };
        if (addedThere) { setAddedThere(false) };
    };

    const getFavouriteMovies = () => {
        const data = JSON.parse(localStorage.getItem("favouriteMovies"));

        if (data) {
            setFavMovieData(data);
        }
    };

    const handleRemove = (movie) => {
        let idx = favMovieData.findIndex((fav) => fav.id === movie.id);

        if (idx !== -1) {
            favMovieData.splice(idx, 1);
            favMovies.splice(idx, 1);
            setFavMoviesCount(favMovieData.length);
            setIsFav(false);
        }

        setFavMovieData([...favMovieData]);
        localStorage.setItem('favouriteMovies', JSON.stringify(favMovieData));
    };

    const value = {
        handleAddToFav,
        alreadyThere,
        addedThere,
        favMovies,
        handleClose,
        favMoviesCount,
        getFavouriteMovies,
        favMovieData,
        handleRemove,
        isFav
    };

    return (
        <FavMovieCounterContext.Provider value={value}>
            {children}
        </FavMovieCounterContext.Provider>
    )
};

export default FavMovieCounterProvider;
