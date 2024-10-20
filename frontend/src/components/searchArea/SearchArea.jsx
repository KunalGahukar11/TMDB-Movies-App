import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import useSearchMovies from '../../hooks/useSearchMovies';

const SearchArea = ({ searchData }) => {
    const { searchResult, setMovieName } = useSearchMovies();

    const getMovieName = (event) => {
        let result = event.target.value;
        setMovieName(result);
    };

    useEffect(() => {
        searchData(searchResult);
    }, [searchResult, searchData]);

    return (
        <>
            <section className='h-64 flex flex-col justify-center mt-4' style={{
                background: 'linear-gradient(to right, #adbbda, #ede8f5)'
            }}>
                <h2 className='p-4 text-3xl font-medium text-center' style={{
                    color: '#3d52a0'
                }}>Lots of Movies, TV Shows to watch.Explore now.</h2>
                <div className='mt-6'>
                    <Box sx={{ width: '100%', maxWidth: '100%', display: 'flex' }}>
                        <FormControl sx={{ width: '70%', margin: '0px auto' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password" sx={{
                                color: 'gray', // Default color
                                '&.Mui-focused': {
                                    color: '#3d52a0', // Color when focused
                                },
                            }}>Search movie, tv show,...</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                sx={{
                                    '&:before': {
                                        borderBottomColor: 'gray', // Default bottom border color
                                    },
                                    '&:after': {
                                        borderBottomColor: '#3d52a0', // Bottom border color when focused
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#3d52a0', // Bottom border color on hover
                                    }
                                }}
                                onChange={(event) => getMovieName(event)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon></SearchIcon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                </div>
            </section>
        </>
    )
}

export default SearchArea