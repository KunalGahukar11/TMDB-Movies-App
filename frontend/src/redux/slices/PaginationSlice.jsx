import { createSlice } from '@reduxjs/toolkit';

const PaginationSlice = createSlice({
    name: "Pagination",
    initialState: {
        value: 1,
    },

    reducers: {
        setPage(state, action) {
            state.value = action.payload;
        },
    },
});

export default PaginationSlice.reducer;
export const PaginationAction = PaginationSlice.actions;