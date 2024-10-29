import { createSlice } from "@reduxjs/toolkit";

const FavMovieCounterSlice = createSlice({
    name: 'FavMoviesCounter',
    initialState: {
        favMovies: [],
        addedThere: false,
        alreadyThere: false,
        count: 0,
    },

    reducers: {

        addToFav: (state, action) => {
            let duplicateEntry = state.favMovies.some((fav) => {
                return fav.id === action.payload.id;
            });

            if (duplicateEntry) {
                state.alreadyThere = true;
                return;
            }

            let updatedArr = [...state.favMovies, action.payload];

            state.favMovies = [...updatedArr];
            state.count = updatedArr.length;

            localStorage.setItem('favouriteMoviesCount', state.favMovies.length);

            state.addedThere = true;
            localStorage.setItem("favouriteMovies", JSON.stringify(updatedArr));
        },

        restoreFromLocalStorage: (state) => {
            let data = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
            let countValue = JSON.parse(localStorage.getItem("favouriteMoviesCount")) || 0;

            state.favMovies = [...data];

            state.count = countValue;
        },

        removeFromFav: (state, action) => {
            let idx = state.favMovies.findIndex((fav) => fav.id === action.payload.id);

            if (idx !== -1) {
                state.favMovies.splice(idx, 1);
                state.count = state.favMovies.length;
                localStorage.setItem('favouriteMoviesCount', state.favMovies.length);
            }

            localStorage.setItem('favouriteMovies', JSON.stringify(state.favMovies));
        },

        handleCloseSnackBar: (state) => {
            if (state.addedThere) { state.addedThere = false };
            if (state.alreadyThere) { state.alreadyThere = false };
        },
    }
});

export default FavMovieCounterSlice.reducer;
export const FavMovieCounterAction = FavMovieCounterSlice.actions;