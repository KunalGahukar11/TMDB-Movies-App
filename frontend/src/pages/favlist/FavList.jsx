import { Grid2 } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { FavMovieOperationsAction } from '../../redux/slices/FavMoviesOpsSlice';
import { useNavigate } from 'react-router-dom';
import useMovies from '../../hooks/useMovies'

const FavList = () => {
    const dispatch = useDispatch();
    const [favMovieData, setFavMovieData] = useState([]);
    const favMovies = useSelector((store) => store.FavMoviesOperations.favMovies);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favouriteMovies"));

        if (data) {
            setFavMovieData(data);
        }

    }, [favMovies]);

    const handleRemove = (movie) => {
        dispatch(FavMovieOperationsAction.removeFromFav(movie));
    };

    const toMoviesDetail = (movie) => {
        localStorage.setItem("moviesDetail", JSON.stringify(movie));
        navigate(`/${movie.id}`, scrollTo(0, 0));
    };

    return (
        <>
            <section className='flex flex-col justify-center my-4'>
                <h2 className='text-2xl p-2 md:text-3xl font-semibold border-l-4 md:p-3 my-6 self-start w-full' style={{
                    background: '#ede8f5', borderLeftColor: '#3d52a0'
                }}>Favourite Movies</h2>

                <Box sx={{
                    flexGrow: 1, maxWidth: '1200px', margin: '0px auto'
                }}>
                    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 5, lg: 12 }}
                        sx={{
                            justifyContent: 'center',
                            "@media (min-width:1281px)": {
                                justifyContent: 'flex-start'
                            },
                        }}>
                        {
                            favMovieData && !!favMovieData.length && favMovieData.map((movie) => (
                                <Grid2 key={movie.id} xs={12} sm={6} md={2.4}>
                                    <Card sx={{
                                        maxWidth: 180, minHeight: 300, cursor: 'pointer',
                                        "@media (max-width:640px)": {
                                            maxWidth: '150px',
                                            borderTopLeftRadius: '10px',
                                            borderTopRightRadius: '10px',
                                            minHeight: '0px',
                                        },
                                        "@media (min-width:640px) and (max-width:768px)": {
                                            maxWidth: '160px',
                                            borderTopLeftRadius: '10px',
                                            borderTopRightRadius: '10px',
                                            minHeight: '0px',
                                        },
                                        "@media (min-width:768px) and (max-width:1024px)": {
                                            maxWidth: '160px',
                                        }
                                    }}>
                                        <CardContent sx={{
                                            height: 'auto', padding: '5px', background: '#eee',
                                            "@media (max-width:640px)": {
                                                display: 'none',
                                            },
                                            "@media (max-width:768px)": {
                                                display: 'none',
                                            },
                                        }}>
                                            <Typography gutterBottom component="div" sx={{ fontWeight: 600, textAlign: 'center', padding: '4px', margin: 0, fontFamily: 'poppins' }}>
                                                {
                                                    movie.title.length >= 15
                                                        ? `${movie.title.substring(0, 10)}...`
                                                        : movie.title
                                                }
                                            </Typography>
                                        </CardContent>
                                        <CardMedia onClick={() => toMoviesDetail(movie)}
                                            component="img"
                                            height="140"
                                            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            alt={movie.title}
                                        />

                                        <CardActions disableSpacing sx={{ background: '#eee', justifyContent: 'end' }}>
                                            <Button size="small" variant='contained' color='error' startIcon={<DeleteIcon />}
                                                sx={{
                                                    fontSize: '13px', padding: '4px', fontFamily: 'poppins'
                                                }}
                                                onClick={() => handleRemove(movie)}>remove</Button>
                                        </CardActions>
                                    </Card>
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Box>
            </section>
        </>
    )
};

export default FavList;