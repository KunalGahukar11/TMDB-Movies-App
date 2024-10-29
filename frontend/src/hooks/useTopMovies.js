import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";

const useTopMovies = () => {
  const [topMov, setTopMov] = useState([]);
  const [err, setErr] = useState("");

  const getTopMovies = async () => {
    try {
      let res = await movieInstance.get("/movie/top_rated");
      setTopMov(res.data.results);
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    getTopMovies();
  }, []);

  return {
    topMov,
    err,
  };
};

export default useTopMovies;
