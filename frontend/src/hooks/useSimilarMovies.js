import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";
import { useParams } from "react-router-dom";

const useSimilarMovies = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const { movieId } = useParams();

  const getSimilarMovies = async () => {
    try {
      let data = await movieInstance.get(`/movie/${movieId}/similar`);
      setSimilarMovies(data.data.results);
      console.log(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSimilarMovies();
  }, [movieId]);

  return {
    similarMovies,
  };
};

export default useSimilarMovies;
