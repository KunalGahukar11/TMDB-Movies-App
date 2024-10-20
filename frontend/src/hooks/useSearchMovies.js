import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";

const useSearchMovies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchErr, setSearchErr] = useState("");
  const [movieName, setMovieName] = useState("");

  const API_KEY = "91eb22cea1ae6c1de6650c52246902a0";

  const getSerachMovies = async () => {
    try {
      let res = await movieInstance.get(
        `search/movie?query=${movieName}&${API_KEY}`
      );
      setSearchResult(res.data.results);
    } catch (error) {
      setSearchErr(error);
    }
  };

  useEffect(() => {
    getSerachMovies();
  }, [movieName]);

  return {
    searchResult,
    searchErr,
    setMovieName,
  };
};

export default useSearchMovies;
