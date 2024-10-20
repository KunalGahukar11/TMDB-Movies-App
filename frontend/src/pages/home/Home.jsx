import { useState } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import SearchArea from "../../components/searchArea/SearchArea";

const Home = () => {
    const [searchResult, setSearchResult] = useState([]);

    const getSearchData = (data) => {
        setSearchResult(data);
    };

    return (
        <>
            <SearchArea searchData={getSearchData}></SearchArea>
            <MoviesList searchResult={searchResult}></MoviesList>
        </>
    )
};

export default Home;