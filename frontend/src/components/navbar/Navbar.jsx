import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FavMovieOperationsAction } from "../../redux/slices/FavMoviesOpsSlice";

const Navbar = () => {
    const count = useSelector((store) => store.FavMoviesOperations.count);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FavMovieOperationsAction.restoreFromLocalStorage());
    }, []);

    const links = [
        {
            path: '/',
            menu: 'Home'
        },
        {
            path: '/watchlist',
            menu: 'WatchList'
        },
        {
            path: '/favlist',
            menu: 'FavList'
        },
        {
            path: '/contact',
            menu: 'Contact Us'
        },
        {
            path: '/about',
            menu: 'About Us'
        },
    ]
    return (
        <>
            <header className="flex justify-between items-center p-3 " style={{ backgroundColor: '#3d52a0' }}>
                {/* navbar left */}
                <div className="ml-4">
                    <h1 className="text-3xl font-extrabold" style={{ color: '#ede8f5' }}>IMDB Logo</h1>
                </div>

                {/* navbar right */}
                <nav className="w-2/5">
                    <ul className="flex justify-start items-center">
                        {
                            links && links.map((item, idx) => {
                                return (
                                    item.menu === 'FavList' ?
                                        <Badge key={idx} badgeContent={count === 0 ? null : count}
                                            variant={count === 0 ? "dot" : "standard"} color="primary"
                                            sx={{
                                                '& .MuiBadge-badge': {
                                                    top: '9px',
                                                    right: '10px',
                                                    backgroundColor: '#ede8f5',
                                                    color: '#3d52a0'
                                                }
                                            }}
                                        >
                                            <li className="m-3 list-none text-lg font-medium cursor-pointer"
                                                style={{ color: '#ede8f5' }}
                                            >
                                                <NavLink to={item.path}
                                                    className={({ isActive }) => {
                                                        return isActive ? "border-b-2 border-indigo-400 text-indigo-100" :
                                                            "hover:text-indigo-400"
                                                    }}>{item.menu}</NavLink>
                                            </li>
                                        </Badge> :
                                        <li key={idx} className="m-3 list-none text-lg font-medium cursor-pointer"
                                            style={{ color: '#ede8f5' }}
                                        >
                                            <NavLink to={item.path}
                                                className={({ isActive }) => {
                                                    return isActive ? "border-b-2 border-indigo-400 text-indigo-100" :
                                                        "hover:text-indigo-400"
                                                }}>{item.menu}</NavLink>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default Navbar;