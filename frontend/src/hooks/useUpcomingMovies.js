import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";

const useUpcomingMovies = () => {
  const [upcomingMov, setUpcomingMov] = useState([]);
  const [err, setErr] = useState("");

  const getUpcomingMovies = async () => {
    try {
      let res = await movieInstance.get("/movie/upcoming");
      setUpcomingMov(res.data.results);
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return {
    upcomingMov,
    err,
  };
};

export default useUpcomingMovies;
