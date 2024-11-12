import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { indigo, grey } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

const Reviews = (props) => {
    return (
        <>
            <section className='my-3'>
                <Card variant="outlined" sx={{ bgcolor: grey[100] }}>
                    <Box sx={{ p: 2 }}>
                        <Stack
                            direction="row"
                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Stack direction="row"
                                sx={{ marginBottom: '10px', gap: '10px', alignItems: 'center' }}>
                                <Avatar sx={{ bgcolor: indigo[400] }}>{props.author.substring(0, 2).toUpperCase()}</Avatar>
                                <Stack>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{ marginBottom: '0px', fontSize: '1.2rem' }}>
                                        {props.author}
                                    </Typography>
                                    <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly max={10} sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </Stack>
                            <Typography gutterBottom variant="h6" component="div">
                                {props.date.slice(0, 10)}
                            </Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {
                                props.desc.length >= 500 ? (
                                    <>
                                        {props.desc.substring(0, 500)}
                                        <span className='font-medium'> more...</span>
                                    </>
                                ) : (
                                    props.desc
                                )
                            }
                        </Typography>
                    </Box>
                </Card>
            </section>
        </>
    )
}

export default Reviews