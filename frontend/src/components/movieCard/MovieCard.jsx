import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { indigo, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';

const MovieCard = (props) => {

    return (
        <>
            <Card sx={{
                maxWidth: 180, minHeight: 300, cursor: 'pointer', bgcolor: indigo[50],
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
                    height: 'auto', padding: '5px',
                    "@media (max-width:640px)": {
                        display: 'none',
                    },
                    "@media (max-width:768px)": {
                        display: 'none',
                    },
                }}>
                    <Typography gutterBottom component="div" sx={{ fontWeight: 600, textAlign: 'center', padding: '4px', margin: 0, fontFamily: 'poppins' }}>
                        {
                            props.title.length >= 15
                                ? `${props.title.substring(0, 10)}...`
                                : props.title
                        }
                    </Typography>
                </CardContent>
                <CardMedia onClick={() => props.handleNavigate()}
                    component="img"
                    height="140"
                    loading='lazy'
                    image={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                    alt={props.title}
                />

                <CardActions disableSpacing sx={{ background: '#eee', justifyContent: 'space-around', padding: '10px 2px', bgcolor: indigo[50], }}>
                    <Button variant='contained' size="small" aria-label="add to favorites" sx={{
                        fontSize: '12px', padding: '6px', fontFamily: 'poppins', lineHeight: '0px',
                        '& .MuiButton-startIcon': { marginRight: '4px' }, borderRadius: '20px', bgcolor: indigo[400]
                    }}
                        onClick={() => props.addToggle()}
                        startIcon={<FavoriteIcon sx={{
                            color: props.isFav ? '#FF0000' : '#FFF',
                            transition: 'color 0.3s ease-in-out', // optional smooth transition
                        }} />}>
                        Fav
                    </Button>
                    <Button variant='contained' size="small" sx={{
                        fontSize: '12px', padding: '6px', fontFamily: 'poppins', lineHeight: '0px',
                        '& .MuiButton-startIcon': { marginRight: '2px' }, borderRadius: '20px', bgcolor: grey[800]
                    }} startIcon={<AddIcon></AddIcon>}>Watchlist</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MovieCard;

