import useMovies from '../../hooks/useMovies'
import { Grid2, Pagination } from '@mui/material';
import MovieCard from '../movieCard/MovieCard';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import useFavMovieCounter from '../../context/favMovieCounter/useFavMovieCounter';

const MoviesList = ({ searchResult }) => {
    const { result, loader, page, totalPages, handlePagination } = useMovies();
    const { handleAddToFav, alreadyThere, addedThere, handleClose } = useFavMovieCounter();

    function SlideTransition(props) {
        return <Slide {...props} direction="left" />;
    }

    return (
        <>
            <section className='flex flex-col items-center justify-center my-4'>
                {
                    addedThere && <Snackbar open={addedThere}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        TransitionComponent={SlideTransition}
                    >
                        <Alert
                            severity="success"
                            variant="filled"
                            sx={{ width: '100%' }}
                        >

                            Added in the Favlist!
                        </Alert>
                    </Snackbar>
                }
                {
                    alreadyThere && <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={alreadyThere}
                        autoHideDuration={3000}
                        TransitionComponent={SlideTransition}
                        onClose={handleClose}
                        message="Already in Favlist"
                    />
                }
                <h1 className='text-3xl font-semibold border-l-4 p-3 my-6 self-start w-full'
                    style={{ borderLeftColor: '#3d52a0', background: '#ede8f5' }}>All Movies</h1>

                {loader && (<Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <CircularProgress />
                </Box>)}

                <Box sx={{ flexGrow: 1, maxWidth: '1200px' }}>
                    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {
                            searchResult.length > 0 ?
                                searchResult.map((movie, index) => (
                                    <Grid2 key={index} xs={12} sm={6} md={2.4}>
                                        <MovieCard title={movie.title}
                                            poster_path={movie.poster_path}
                                            addToFav={() => handleAddToFav(movie)}
                                        ></MovieCard>
                                    </Grid2>
                                )) :
                                result.length > 0 ?
                                    result.map((movie, index) => (
                                        <Grid2 key={index} xs={12} sm={6} md={2.4}>
                                            <MovieCard title={movie.title}
                                                poster_path={movie.poster_path}
                                                addToFav={() => handleAddToFav(movie)}
                                            ></MovieCard>
                                        </Grid2>
                                    )) :
                                    <p>No movies found</p>
                        }
                    </Grid2>
                </Box>
                <Pagination className='p-4 m-4'
                    count={totalPages}
                    variant='outlined'
                    color='primary'
                    page={page}
                    onChange={(_, value) => { handlePagination(value), scrollTo(0, 0) }}
                />
            </section>
        </>
    )
}

export default MoviesList;