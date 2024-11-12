import React, { useCallback } from 'react';
import useSimilarMovies from '../../hooks/useSimilarMovies';
import MovieCard from '../movieCard/MovieCard';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FavMovieOperationsAction } from '../../redux/slices/FavMoviesOpsSlice';
import { useNavigate } from 'react-router-dom';

const RelatedMovies = () => {
    const { similarMovies } = useSimilarMovies();
    const { isFavMap } = useSelector((store) => store.FavMoviesOperations);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTogglingFavBtn = useCallback((movie) => {
        dispatch(FavMovieOperationsAction.addRemoveToggle(movie))
    }, [dispatch]);

    const toMoviesDetail = (movie) => {
        localStorage.setItem("moviesDetail", JSON.stringify(movie));
        navigate(`/${movie.id}`, scrollTo(0, 0));
    };

    return (
        <section className='flex flex-col items-center justify-center my-4'>
            <Box sx={{ flexGrow: 1, maxWidth: '1200px', }}>
                <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 5, lg: 12 }}
                    sx={{
                        justifyContent: 'center',

                        "@media (min-width:1281px)": {
                            justifyContent: 'flex-start'
                        },
                    }}>
                    {
                        similarMovies && similarMovies.length > 0 && similarMovies.slice(0, 12).map((movie) => {
                            return (
                                <Grid2 key={movie.id} xs={12} sm={6} md={2.4}>
                                    <MovieCard title={movie.title}
                                        poster_path={movie.poster_path}
                                        addToggle={() => handleTogglingFavBtn(movie)}
                                        handleNavigate={() => toMoviesDetail(movie)}
                                        isFav={isFavMap[movie.id]}
                                    ></MovieCard>
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </Box>
        </section>

    )
}

export default React.memo(RelatedMovies);