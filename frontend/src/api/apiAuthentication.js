import axios from "axios";

const THE_MOVIE_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWViMjJjZWExYWU2YzFkZTY2NTBjNTIyNDY5MDJhMCIsIm5iZiI6MTcyODU2OTQ2Mi4zNTE5MjYsInN1YiI6IjY3MDYzMzg5ZGM1NGYyOWQwZWFiNTI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kiwh6TC0SjVdfmAIpiI6HE0GO4-wEAYyTqD7gmjQcuI";

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Authorization: Bearer ${THE_MOVIE_API_TOKEN}`,
  },
  responseType: "json",
});
