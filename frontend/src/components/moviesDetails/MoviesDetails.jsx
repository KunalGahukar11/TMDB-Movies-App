import { useEffect, useState } from "react";
import './MoviesDetails.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { FavMovieOperationsAction } from "../../redux/slices/FavMoviesOpsSlice";
import { useSnackbar } from 'notistack';

const MoviesDetails = () => {
    const [movieData, setMovieData] = useState(null);
    const isFavMap = useSelector((store) => store.FavMoviesOperations.isFavMap);
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("moviesDetail"));
        setMovieData(data);
    }, []);

    const handleToggling = (movie) => {
        dispatch(FavMovieOperationsAction.addRemoveToggle(movie));

        if (isFavMap[movie.id]) {
            enqueueSnackbar('Remove from Favlist',
                {
                    variant: 'default', anchorOrigin: {
                        vertical: 'top',   // position from top
                        horizontal: 'right' // position from right
                    }
                });
        } else {
            enqueueSnackbar('Added to Favlist',
                {
                    variant: 'success', anchorOrigin: {
                        vertical: 'top',   // position from top
                        horizontal: 'right' // position from right
                    }
                });
        }
    };

    return (
        <>
            {
                movieData && (
                    <section className="my-4 md:relative heading_and_texts ">
                        {/* container */}
                        <div className="hidden absolute flex-row justify-around items-center w-full h-full z-10 sm:hidden md:flex">

                            {/* movie detail left */}

                            <div className="w-1/4 flex flex-col items-center h-full justify-center gap-4">
                                <img className="rounded-lg w-3/4 shadow_effect"
                                    src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} />

                                <div className="flex flex-col gap-2 items-center md:text-sm lg:text-lg">
                                    <p className="italic">{movieData.title}</p>
                                    <p className="italic">Popularity : <span className="font-bold text-gray-300">{movieData.popularity}</span></p>
                                    <p className="italic">Voting: <span className="font-bold text-gray-300">{movieData.vote_count}</span></p>
                                </div>
                            </div>

                            <Divider orientation="vertical" flexItem sx={{
                                bgcolor: 'gray', height: '90%', alignSelf: 'center',
                                "@media (max-width:640px)": {
                                    display: 'none'
                                }
                            }} />

                            {/* movie detail right */}

                            <div className="w-3/5 flex flex-col justify-center md:gap-3 lg:gap-5 h-full">
                                <div className="border-l-4 border-gray-100 md:p-2 lg:p-3 flex flex-col gap-1">
                                    <h1 className="lg:text-3xl font-bold">{movieData.original_title} ({(movieData.release_date).split("-")[0]})
                                    </h1>
                                    <p className="italic text-sm text-gray-300">{movieData.release_date} | {movieData.original_language}
                                        {movieData.adult && (<span>| A rated</span>)}
                                    </p>
                                    <div className=" w-full flex items-center gap-2">
                                        <p className="italic text-sm text-gray-300">Rating :</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read customized-10"
                                                defaultValue={movieData.vote_average}
                                                max={10}
                                                sx={{
                                                    '& .MuiRating-iconEmpty': {
                                                        color: '#ddd',  // Color for empty stars
                                                    },
                                                }}
                                                precision={0.5}
                                                readOnly />
                                        </Stack>
                                        <span className="italic text-sm font-bold text-gray-300">({movieData.vote_average.toFixed(1)})</span>
                                    </div>
                                </div>

                                <div className="md:p-3 lg:p-5">
                                    <h1 className="font-semibold md:text-sm lg:text-xl mb-3">Overview</h1>
                                    <p className="font-extralight">{movieData.overview !== "" ? movieData.overview : "-"}</p>
                                </div>

                                <div className="w-full flex pl-5 gap-5">
                                    <p className="cursor-pointer font-normal"><BookmarkIcon></BookmarkIcon> Add to Watchlist</p>
                                    <p className="cursor-pointer font-normal"
                                        onClick={() => handleToggling(movieData)}>
                                        <FavoriteIcon sx={{
                                            color: isFavMap[movieData.id] ? '#FF0000' : 'inherit',
                                            transition: 'color 0.3s ease-in-out', // optional smooth transition
                                        }}></FavoriteIcon> {isFavMap[movieData.id] ? "Added to Favlist" : "Add to Favlist"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative border-2 border-white hidden md:block">
                            <img className=" object-cover opacity-45"
                                src={`https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`} alt={movieData.title} />
                            <div id="overlay"></div>
                        </div>

                        {/* for mobile screen */}

                        <div className="flex flex-col items-center md:hidden">
                            <h1 className="text-gray-800 w-full text-2xl font-bold text-center my-4">{movieData.original_title}</h1>
                            <img className="rounded-lg w-1/2 z-10 shadow_effect"
                                src={`https://image.tmdb.org/t/p/w342/${movieData.poster_path}`} alt={movieData.title} />

                            <div className="flex justify-center relative w-full h-[700px]">
                                <div className="absolute h-[750px] flex flex-col rounded-lg w-11/12 text-gray-700 gap-3 pt-20 -top-16 border border-gray-300" id="shadow"
                                    style={{ background: '#f5f4f7' }}>
                                    <div className=" w-full flex items-center justify-center mt-4">
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read customized-10"
                                                defaultValue={movieData.vote_average}
                                                max={10}
                                                precision={0.5}
                                                readOnly />
                                        </Stack>
                                    </div>

                                    <div className="flex flex-col gap-2 items-center text-lg">
                                        <p className="italic">Popularity : <span className="font-bold ">{movieData.popularity}</span></p>
                                        <p className="italic">Voting: <span className="font-bold">{movieData.vote_count}</span></p>
                                    </div>

                                    <div className="p-2">
                                        <h1 className="font-semibold text-lg text-center mb-2">Overview</h1>
                                        <p className="font-light text-center p-3">{movieData.overview !== "" ? movieData.overview : "-"}</p>
                                    </div>

                                    <div className="w-full flex justify-around gap-3 p-4">
                                        <p className="cursor-pointer font-medium text-lg"><BookmarkIcon></BookmarkIcon> To Watchlist</p>
                                        <p className="cursor-pointer font-medium text-lg"
                                            onClick={() => handleToggling(movieData)}>
                                            <FavoriteIcon sx={{
                                                color: isFavMap[movieData.id] ? '#FF0000' : 'inherit',
                                                transition: 'color 0.3s ease-in-out', // optional smooth transition
                                            }}></FavoriteIcon> {isFavMap[movieData.id] ? "Added" : "To Favlist"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
};

export default MoviesDetails;
