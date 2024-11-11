import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";
import { useParams } from "react-router-dom";

const useMovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  const getSimilarMovies = async () => {
    try {
      let result = await movieInstance.get(`/movie/${movieId}/reviews`);
      setMovieReviews(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);

  return {
    movieReviews,
  };
};

export default useMovieReviews;
