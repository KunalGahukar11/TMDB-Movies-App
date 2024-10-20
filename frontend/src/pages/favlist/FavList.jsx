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
import useFavMovieCounter from '../../context/favMovieCounter/useFavMovieCounter';

const FavList = () => {
    const { getFavouriteMovies, favMovieData, handleRemove } = useFavMovieCounter();

    useEffect(() => {
        getFavouriteMovies();
    }, []);


    return (
        <>
            <section className='flex flex-col justify-center my-4'>
                <h2 className='text-3xl font-semibold border-l-4 my-6 p-3 w-full' style={{
                    background: '#ede8f5', borderLeftColor: '#3d52a0'
                }}>Favourite Movies</h2>

                <Box sx={{ flexGrow: 1, margin: '0 auto', Width: '100%' }}>
                    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            favMovieData && !!favMovieData.length && favMovieData.map((movie, index) => (
                                <Grid2 key={index} xs={12} sm={6} md={2.4}>
                                    <Card sx={{ maxWidth: 180, minHeight: 300, cursor: 'pointer' }}>
                                        <CardContent sx={{ height: 'auto', padding: '5px', background: '#eee' }}>
                                            <Typography gutterBottom component="div" sx={{ fontWeight: 600, textAlign: 'center', padding: '4px', margin: 0, fontFamily: 'poppins' }}>
                                                {
                                                    movie.title.length >= 20 ?
                                                        `${movie.title.substring(0, 15)}...` :
                                                        movie.title
                                                }
                                            </Typography>
                                        </CardContent>
                                        <CardMedia
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