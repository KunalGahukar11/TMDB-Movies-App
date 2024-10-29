import axios from "axios";

const API_MOVIES_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWViMjJjZWExYWU2YzFkZTY2NTBjNTIyNDY5MDJhMCIsIm5iZiI6MTcyOTg4NTEzNS4xNDg2LCJzdWIiOiI2NzA2MzM4OWRjNTRmMjlkMGVhYjUyNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xlcadxtvmFrSdKFHTDyBxu_rmdHVHkU4z3VgBFs-l_g";

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_MOVIES_TOKEN}`,
  },
  responseType: "json",
});
