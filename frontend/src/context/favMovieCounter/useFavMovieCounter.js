import { useContext } from "react";
import FavMovieCounterContext from "./FavMovieCounterContext";

const useFavMovieCounter = () => {
  return useContext(FavMovieCounterContext);
};

export default useFavMovieCounter;
