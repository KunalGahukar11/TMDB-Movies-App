import { createSlice } from "@reduxjs/toolkit";

const FavMovieOperationsSlice = createSlice({
    name: 'FavMoviesCounter',
    initialState: {
        favMovies: [],
        count: 0,
        isFavMap: {},
    },

    reducers: {

        addRemoveToggle: (state, action) => {
            if (state.isFavMap.hasOwnProperty(action.payload.id)) {
                let idx = state.favMovies.findIndex((fav) => fav.id === action.payload.id);

                if (idx !== -1) {
                    state.favMovies.splice(idx, 1);
                    // let updatedList = JSON.parse(localStorage.getItem('inFavourite'));
                    delete state.isFavMap[action.payload.id];
                    localStorage.setItem("inFavourite", JSON.stringify(state.isFavMap));

                    state.count = state.favMovies.length;
                    localStorage.setItem('favouriteMoviesCount', state.favMovies.length);
                }

                localStorage.setItem('favouriteMovies', JSON.stringify(state.favMovies));
            } else {
                let duplicateEntry = state.favMovies.some((fav) => {
                    return fav.id === action.payload.id;
                });

                if (duplicateEntry) {
                    return;
                }

                let updatedArr = [...state.favMovies, action.payload];

                state.favMovies = [...updatedArr];
                state.count = updatedArr.length;
                state.isFavMap = { ...state.isFavMap, [action.payload.id]: true };

                localStorage.setItem("inFavourite", JSON.stringify(state.isFavMap));
                localStorage.setItem('favouriteMoviesCount', state.favMovies.length);
                localStorage.setItem("favouriteMovies", JSON.stringify(updatedArr));
            }
        },

        restoreFromLocalStorage: (state) => {
            let data = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
            let countValue = JSON.parse(localStorage.getItem("favouriteMoviesCount")) || 0;
            let favList = JSON.parse(localStorage.getItem("inFavourite")) || {};

            state.favMovies = [...data];
            state.isFavMap = { ...favList };
            state.count = countValue;
        },

        removeFromFav: (state, action) => {
            let idx = state.favMovies.findIndex((fav) => fav.id === action.payload.id);

            if (idx !== -1) {
                state.favMovies.splice(idx, 1);
                delete state.isFavMap[action.payload.id];
                localStorage.setItem("inFavourite", JSON.stringify(state.isFavMap));

                state.count = state.favMovies.length;
                localStorage.setItem('favouriteMoviesCount', state.favMovies.length);
            }

            localStorage.setItem('favouriteMovies', JSON.stringify(state.favMovies));
        },
    }
});

export default FavMovieOperationsSlice.reducer;
export const FavMovieOperationsAction = FavMovieOperationsSlice.actions;