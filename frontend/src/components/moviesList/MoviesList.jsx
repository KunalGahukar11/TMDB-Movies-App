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
        console.log(isFavMap);

    };

    const toMoviesDetail = (movie) => {
        localStorage.setItem("moviesDetail", JSON.stringify(movie));
        navigate(`/${movie.id}`, scrollTo(0, 0));
    };

    return (
        <>
            <section className='flex flex-col items-center justify-center my-4'>
                <h1 className='text-2xl p-2 md:text-3xl font-semibold border-l-4 md:p-3 my-6 self-start w-full'
                    style={{ borderLeftColor: '#3d52a0', background: '#ede8f5' }}>All Movies</h1>

                <Box sx={{ flexGrow: 1, maxWidth: '1200px', }}>
                    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 5, lg: 12 }}
                        sx={{
                            justifyContent: 'center',

                            "@media (min-width:1281px)": {
                                justifyContent: 'flex-start'
                            },
                        }}>
                        {
                            searchResult.length > 0 ?
                                searchResult.map((movie) => (
                                    <Grid2 key={movie.id} xs={12} sm={6} md={2.4}>
                                        <MovieCard title={movie.title}
                                            poster_path={movie.poster_path}
                                            addToggle={() => handleTogglingFavBtn(movie)}
                                            handleNavigate={() => toMoviesDetail(movie)}
                                            isFav={isFavMap[movie.id]}
                                        ></MovieCard>
                                    </Grid2>
                                )) :
                                result.length > 0 ?
                                    result.map((movie) => (
                                        <Grid2
                                            key={movie.id} >
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
                    sx={{
                        '@media (max-width:640px)': {
                            '& .MuiPagination-ul': {
                                flexWrap: 'nowrap', // Prevents wrapping on smaller screens
                            },
                            '& .MuiPaginationItem-root': {
                                minWidth: '28px', // Reduces button width
                                padding: '4px', // Reduces button padding
                            },
                        },
                        '@media (min-width:640px)': {
                            '& .MuiPaginationItem-root': {
                                minWidth: '35px', // Reduces button width
                                padding: '6px', // Reduces button padding
                            },
                        },
                    }}
                />
            </section>
        </>
    )
}

export default MoviesList;
