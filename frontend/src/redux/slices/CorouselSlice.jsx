import { createSlice } from "@reduxjs/toolkit"

const CorouselSlice = createSlice({
    name: 'Corousel',
    initialState: {
        currIdx: 0,
    },

    reducers: {
        addCorouselEffect: (state, action) => {
            if (state.currIdx === action.payload.length - 1) {
                state.currIdx = 0;
            } else {
                state.currIdx += 1;
            }
        },
    },
});

export default CorouselSlice.reducer;
export const CorouselSlceAction = CorouselSlice.actions;