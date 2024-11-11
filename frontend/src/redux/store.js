import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./slices/PaginationSlice";
import FavMoviesOps from "./slices/FavMoviesOpsSlice";
import SearchMoviesReducer from "./slices/SearchAreaSlice";
import CorouselReducer from "./slices/CorouselSlice.jsx";

export const store = configureStore({
  reducer: {
    Pagination: PaginationReducer,
    FavMoviesOperations: FavMoviesOps,
    SearchMovies: SearchMoviesReducer,
    Corousel: CorouselReducer,
  },
});
