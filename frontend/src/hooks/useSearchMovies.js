import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";
import { useSelector } from "react-redux";

const useSearchMovies = () => {
  const [searchErr, setSearchErr] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { inputSearch } = useSelector((store) => store.SearchMovies);

  const API_KEY = "91eb22cea1ae6c1de6650c52246902a0";

  const getSearchMovies = async () => {
    try {
      let res = await movieInstance.get(
        `search/movie?query=${inputSearch}&${API_KEY}`
      );
      setSearchResult(res.data.results);
    } catch (error) {
      setSearchErr(error);
    }
  };

  useEffect(() => {
    getSearchMovies();
  }, [inputSearch]);

  return {
    searchErr,
    searchResult,
  };
};

export default useSearchMovies;
