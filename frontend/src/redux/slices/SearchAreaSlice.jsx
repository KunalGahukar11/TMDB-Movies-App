import { createSlice } from "@reduxjs/toolkit";

const SearchAreaSlice = createSlice({
    name: 'SearchArea',
    initialState: {
        inputSearch: '',
    },

    reducers: {
        searchMovie: (state, action) => {
            let movie = action.payload;
            state.inputSearch = movie;
        },
    }
});

export default SearchAreaSlice.reducer;
export const SearchAreaAction = SearchAreaSlice.actions;