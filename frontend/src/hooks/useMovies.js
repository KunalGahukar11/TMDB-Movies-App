import { useEffect, useState } from "react";
import { movieInstance } from "../api/apiAuthentication";

const useMovies = () => {
  const [result, setResult] = useState([]);
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(false);
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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

  const handlePagination = (newPage) => {
    setpage(newPage);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return {
    result,
    err,
    loader,
    page,
    totalPages,
    handlePagination,
  };
};

export default useMovies;
