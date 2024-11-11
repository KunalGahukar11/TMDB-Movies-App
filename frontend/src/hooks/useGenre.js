import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";

const useGenre = () => {
  const [genreIds, setGenreIds] = useState([]);

  const getGenre = async () => {
    try {
      let res = await movieInstance.get("/genre/movie/list");
      //   console.log(res);
      setGenreIds(res.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  return {
    genreIds,
  };
};

export default useGenre;
