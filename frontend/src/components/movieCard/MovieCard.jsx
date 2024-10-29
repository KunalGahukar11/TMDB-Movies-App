import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';

const MovieCard = (props) => {

    return (
        <>
            <Card sx={{ maxWidth: 180, minHeight: 300, cursor: 'pointer' }}>
                <CardContent sx={{ height: 'auto', padding: '5px', background: '#eee' }}>
                    <Typography gutterBottom component="div" sx={{ fontWeight: 600, textAlign: 'center', padding: '4px', margin: 0, fontFamily: 'poppins' }}>
                        {
                            props.title.length >= 20 ?
                                `${props.title.substring(0, 15)}...` :
                                props.title
                        }
                    </Typography>
                </CardContent>
                <CardMedia onClick={() => props.handleNavigate()}
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                    alt={props.title}
                />

                <CardActions disableSpacing sx={{ background: '#eee', justifyContent: 'space-around' }}>
                    <IconButton aria-label="add to favorites" sx={{ padding: 0 }}
                        onClick={() => props.addToFav()}>
                        <FavoriteIcon sx={{
                            color: props.isFav ? '#FF0000' : 'grey',
                            transition: 'color 0.3s ease-in-out', // optional smooth transition
                        }} />
                    </IconButton>
                    <Button size="small" sx={{
                        fontSize: '13px', padding: '4px', fontFamily: 'poppins'
                    }}>to Watchlist</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MovieCard;

