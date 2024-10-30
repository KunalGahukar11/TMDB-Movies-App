import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FavMovieOperationsAction } from "../../redux/slices/FavMoviesOpsSlice";
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

const Navbar = () => {
    const count = useSelector((store) => store.FavMoviesOperations.count);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(FavMovieOperationsAction.restoreFromLocalStorage());
    }, []);

    const handleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

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
            <header className="flex justify-between items-center p-3" style={{ backgroundColor: '#3d52a0' }}>
                {/* navbar left */}
                <div className="sm: w-1/2 ml-4">
                    <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#ede8f5' }}>IMDB Logo</h1>
                </div>

                {/* navbar right */}
                <nav className="hidden md:w-3/4 md:block lg:w-3/5">
                    <ul className="flex justify-start items-center lg:justify-end mr-3">
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
                                            <li className="m-3 list-none text-lg font-medium cursor-pointer "
                                                style={{ color: '#ede8f5' }}
                                            >
                                                <NavLink to={item.path}
                                                    className={({ isActive }) => {
                                                        return isActive ? "border-b-2 border-indigo-400 text-indigo-100" :
                                                            "hover:text-indigo-400"
                                                    }}>{item.menu}</NavLink>
                                            </li>
                                        </Badge> :
                                        <li key={idx} className="m-3 list-none text-lg font-medium cursor-pointer "
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

                <div className="mr-5 flex md:hidden">
                    <MenuIcon onClick={() => handleMenu()}
                        sx={{
                            color: '#ede8f5',
                            curson: 'pointer'
                        }}
                        fontSize="large">
                    </MenuIcon>
                </div>

            </header>

            {
                isOpen && (
                    <aside className="flex justify-center p-3 m-1 w-5/12 absolute rounded-lg border border-gray-300 right-0 z-10 md:hidden shadow-effect"
                        style={{ backgroundColor: '#edf1ff' }}>
                        <ul className="flex flex-col gap-4">
                            {
                                links && links.map((link, idx) => {
                                    return (
                                        <li onClick={() => setIsOpen(false)} className="font-medium text-lg transform hover:scale-110 transition duration-300" key={idx}><NavLink to={link.path}>{link.menu}</NavLink></li>
                                    )
                                })
                            }
                        </ul>
                    </aside>
                )
            }
        </>
    )
};

export default Navbar;