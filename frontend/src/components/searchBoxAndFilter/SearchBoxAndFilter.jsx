import { Box, FormControl, Input, InputLabel, OutlinedInput } from '@mui/material';
import React, { useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch } from 'react-redux';
import { SearchAreaAction } from '../../redux/slices/SearchAreaSlice';
import { debounce } from '../../utils/debouncing';

const SearchBoxAndFilter = () => {
    const dispatch = useDispatch();

    const getMovieBySearch = useCallback(
        debounce((event) => {
            dispatch(SearchAreaAction.searchMovie(event.target.value));
        }, 600), [dispatch]
    );

    return (
        <div className='mb-6 w-full hidden md:block'>
            <Box sx={{
                display: 'flex', justifyContent: 'flex-end'
            }}>
                <FormControl sx={{ m: 1, width: '33%' }} variant="outlined">
                    <InputLabel sx={{
                        '&.Mui-focused': {
                            transform: 'translate(20px, -8px) scale(0.8)', // Adjust for better centering on focus
                        },
                    }}>Search for movies</InputLabel>
                    <OutlinedInput
                        sx={{ borderRadius: '50px' }}
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon></SearchIcon>
                            </InputAdornment>
                        }
                        label="Search for movies"
                        onChange={(event) => getMovieBySearch(event)}
                    />
                </FormControl>
                {/* <FormControl sx={{ m: 1, width: '20%' }} variant="outlined">
                    <InputLabel sx={{
                        '&.Mui-focused': {
                            transform: 'translate(14px, -8px) scale(0.8)', // Adjusting for better centering
                        },
                        left: '5px'
                    }}>Apply filter</InputLabel>
                    <OutlinedInput
                        sx={{
                            borderRadius: '50px',
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <FilterAltIcon></FilterAltIcon>
                            </InputAdornment>
                        }
                        label="Apply filter"
                    />
                </FormControl> */}
            </Box>
        </div>
    )
}

export default SearchBoxAndFilter