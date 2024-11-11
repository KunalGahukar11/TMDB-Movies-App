import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Reviews = (props) => {
    return (
        <>
            <section className='my-3'>
                <Card variant="outlined">
                    <Box sx={{ p: 2 }}>
                        <Stack
                            direction="row"
                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.author}
                            </Typography>
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