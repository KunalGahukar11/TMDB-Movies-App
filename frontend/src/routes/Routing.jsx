import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

const Routing = () => {
    const HomePage = lazy(() => import('../pages/home/Home.jsx'));
    const WatchListPage = lazy(() => import('../pages/watchlist/WatchList.jsx'));
    const FavListPage = lazy(() => import('../pages/favlist/FavList.jsx'));
    const ContactPage = lazy(() => import('../pages/contact/ContactUs.jsx'));
    const AboutPage = lazy(() => import('../pages/about/AboutUs.jsx'));
    const NotFoundPage = lazy(() => import('../pages/notFound/NotFound.jsx'));
    const MoviesDetailsPage = lazy(() => import('../components/moviesDetails/MoviesDetails.jsx'));

    return (
        <>
            <div style={{ width: '90%', margin: '0px auto' }}>
                <Suspense fallback={
                    <div className="w-full h-full flex justify-center items-center">
                        <CircularProgress></CircularProgress>
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route path="/:movieId" element={<MoviesDetailsPage></MoviesDetailsPage>}></Route>
                        <Route path="/watchlist" element={<WatchListPage></WatchListPage>}></Route>
                        <Route path="/favlist" element={<FavListPage></FavListPage>}></Route>
                        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
                        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
                    </Routes>
                </Suspense>
            </div >
        </>
    )
};

export default Routing;