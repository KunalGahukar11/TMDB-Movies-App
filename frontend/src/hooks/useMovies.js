import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";
import { useSelector } from "react-redux";

const useMovies = () => {
  const [result, setResult] = useState([]);
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const page = useSelector((store) => store.Pagination.value);

  const getMovies = async () => {
    try {
      setLoader(true);
      let res = await movieInstance.get(`/discover/movie?page=${page}`);
      setResult(res.data.results);
      setTotalPages(res.data.total_pages);
    } catch (error) {
      setErr(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return {
    result,
    err,
    loader,
    totalPages,
  };
};

export default useMovies;
