import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import FavList from "../pages/favlist/FavList";
import ContactUs from "../pages/contact/ContactUs";
import AboutUs from "../pages/about/AboutUs";
import NotFound from "../pages/notFound/NotFound";
import WatchList from '../pages/watchlist/WatchList.jsx';
import FavMovieCounterProvider from "../context/favMovieCounter/FavMovieCounterProvider.jsx";

const Routing = () => {
    return (
        <>
            <div style={{ width: '90%', margin: '0px auto' }}>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/watchlist" element={<WatchList></WatchList>}></Route>
                    <Route path="/favlist" element={<FavList></FavList>}></Route>
                    <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
                    <Route path="/about" element={<AboutUs></AboutUs>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </div>
        </>
    )
};

export default Routing;