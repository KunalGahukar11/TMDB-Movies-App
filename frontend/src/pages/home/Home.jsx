import Corousel from "../../components/corousel/Corousel";
import MoviesList from "../../components/moviesList/MoviesList";
import SearchArea from "../../components/searchArea/SearchArea";

const Home = () => {
    return (
        <>
            <Corousel></Corousel>
            <SearchArea></SearchArea>
            <MoviesList></MoviesList>
        </>
    )
};

export default Home;