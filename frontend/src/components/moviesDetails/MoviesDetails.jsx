import { useEffect, useState } from "react";
import './MoviesDetails.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MoviesDetails = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("moviesDetail"));
        setMovieData(data);
    }, []);

    return (
        <>
            {
                movieData && (
                    <section className="my-4 relative heading_and_texts">
                        {/* container */}
                        <div className="flex absolute justify-around items-center w-full h-full z-10">
                            {/* movie detail left */}
                            <div className="w-1/4 flex flex-col items-center h-full justify-center gap-4">
                                <img className="rounded-lg w-3/4 shadow_effect"
                                    src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} />

                                <div className="flex flex-col gap-2 items-center">
                                    <p className="italic">{movieData.title}</p>
                                    <p className="italic">Popularity : <span className="font-bold text-gray-300">{movieData.popularity}</span></p>
                                    <p className="italic">Voting: <span className="font-bold text-gray-300">{movieData.vote_count}</span></p>
                                </div>
                            </div>

                            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'gray', height: '90%', alignSelf: 'center' }} />

                            {/* movie detail right */}
                            <div className="w-3/5 flex flex-col justify-center gap-5 h-full">
                                <div className="border-l-4 border-gray-100 p-3 flex flex-col gap-1">
                                    <h1 className="text-3xl font-bold">{movieData.original_title} ({(movieData.release_date).split("-")[0]})
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

                                <div className="p-5">
                                    <h1 className="font-semibold text-xl mb-3">Overview</h1>
                                    <p className="font-extralight">{movieData.overview !== "" ? movieData.overview : "-"}</p>
                                </div>

                                <div className="w-full flex pl-5 gap-5">
                                    <p className="cursor-pointer font-normal"><BookmarkIcon></BookmarkIcon> Add to Watchlist</p>
                                    <p className="cursor-pointer font-normal"><FavoriteIcon></FavoriteIcon> Add to Favlist</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative border-2 border-white">
                            <img className=" object-cover opacity-45"
                                src={`https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`} alt={movieData.title} />
                            <div id="overlay"></div>
                        </div>
                    </section>
                )
            }
        </>
    )
};

export default MoviesDetails;
