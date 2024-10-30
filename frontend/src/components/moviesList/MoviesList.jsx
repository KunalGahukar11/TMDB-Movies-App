import useMovies from '../../hooks/useMovies'
import { Grid2, Pagination } from '@mui/material';
import MovieCard from '../movieCard/MovieCard';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationAction } from '../../redux/slices/PaginationSlice';
import { FavMovieOperationsAction } from '../../redux/slices/FavMoviesOpsSlice';
import { useEffect } from 'react';
import useSearchMovies from '../../hooks/useSearchMovies';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const MoviesList = () => {
    const { result, totalPages } = useMovies();
    const { searchResult } = useSearchMovies();
    const page = useSelector((store) => store.Pagination.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { isFavMap } = useSelector((store) => store.FavMoviesOperations);

    useEffect(() => {
        dispatch(FavMovieOperationsAction.restoreFromLocalStorage());
        console.log(result);
    }, []);

    const handlePagination = (newPage) => {
        dispatch(PaginationAction.setPage(newPage));
    };

    const handleTogglingFavBtn = (movie) => {
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

    const toMoviesDetail = (movie) => {
        localStorage.setItem("moviesDetail", JSON.stringify(movie));
        navigate(`/${movie.id}`);
    };

    return (
        <>
            <section className='flex flex-col items-center justify-center my-4'>
                <h1 className='text-3xl font-semibold border-l-4 p-3 my-6 self-start w-full'
                    style={{ borderLeftColor: '#3d52a0', background: '#ede8f5' }}>All Movies</h1>

                <Box sx={{ flexGrow: 1, maxWidth: '1200px' }}>
                    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {
                            searchResult.length > 0 ?
                                searchResult.map((movie) => (
                                    <Grid2 key={movie.id} xs={12} sm={6} md={2.4}>
                                        <MovieCard title={movie.title}
                                            poster_path={movie.poster_path}
                                            addToFav={() => handleAddToFav(movie)}
                                            handleNavigate={() => toMoviesDetail(movie)}
                                            isFav={movie.isFav}
                                        ></MovieCard>
                                    </Grid2>
                                )) :
                                result.length > 0 ?
                                    result.map((movie) => (
                                        <Grid2 key={movie.id} xs={12} sm={6} md={2.4}>
                                            <MovieCard title={movie.title}
                                                poster_path={movie.poster_path}
                                                addToggle={() => handleTogglingFavBtn(movie)}
                                                handleNavigate={() => toMoviesDetail(movie)}
                                                isFav={isFavMap[movie.id]}
                                            ></MovieCard>
                                        </Grid2>
                                    )) :
                                    <p>No movies found</p>
                        }
                    </Grid2>
                </Box>
                <Pagination className='mt-10' shape='rounded'
                    color="primary"
                    count={totalPages}
                    page={page}
                    onChange={(_, value) => { handlePagination(value), scrollTo(0, 0) }}
                />
            </section>
        </>
    )
}

export default MoviesList;
