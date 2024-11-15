import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FavMovieOperationsAction } from "../../redux/slices/FavMoviesOpsSlice";
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const count = useSelector((store) => store.FavMoviesOperations.count);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)');
    const isDesktop = useMediaQuery('(min-width:769px)');


    useEffect(() => {
        dispatch(FavMovieOperationsAction.restoreFromLocalStorage());
    }, []);

    const handleMenu = () => {
        setIsOpen(prev => !prev);
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
                {
                    isDesktop && (
                        <nav className="flex justify-end md:w-4/5 lg:w-3/5">
                            {

                                <ul className="flex justify-start items-center md:gap-3 lg:gap-0 lg:justify-end mr-3">
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
                                                            },

                                                            "@media (min-width:768px) and (max-width:1024px)": {
                                                                '& .MuiBadge-badge': {
                                                                    top: '-2px',
                                                                    right: '-2px',
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <li className=" lg:m-3 list-none text-lg font-medium cursor-pointer"
                                                            style={{ color: '#ede8f5' }}
                                                        >
                                                            <NavLink to={item.path}
                                                                className={({ isActive }) => {
                                                                    return isActive ? "border-b-2 border-indigo-400 text-indigo-100" :
                                                                        "hover:text-indigo-400"
                                                                }}>{item.menu}</NavLink>
                                                        </li>
                                                    </Badge> :
                                                    <li key={idx} className=" lg:m-3 list-none text-lg font-medium cursor-pointer"
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
                            }
                        </nav>
                    )
                }

                {
                    isMobile && isOpen === false && (
                        <div className="mr-5">
                            <MenuIcon onClick={() => handleMenu()}
                                sx={{
                                    color: '#ede8f5',
                                    curson: 'pointer'
                                }}
                                fontSize="large">
                            </MenuIcon>
                        </div>
                    )
                }

            </header>

            {
                isOpen && isMobile && (
                    <aside className={`${isOpen ? 'fixed w-full' : 'h-0 w-0'} fixed top-0 bottom-0 right-0 z-50 overflow-hidden transition-all`}
                        style={{
                            backgroundColor: '#edf1ff',
                        }}>
                        <div className="flex justify-end m-6">
                            <div className="border border-blue-300 rounded-full w-14 h-14 shadow-md flex justify-center items-center cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <CloseIcon sx={{ fontSize: '40px' }} onClick={() => { handleMenu() }}></CloseIcon>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-8 items-center">
                            {
                                links && links.map((link, idx) => {
                                    return (
                                        <NavLink to={link.path} onClick={() => handleMenu()} key={idx}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-white bg-blue-400 rounded-lg"
                                                    : "text-black"
                                            }>
                                            <p className="font-medium text-2xl p-2 hover:bg-blue-400 hover:text-white hover:rounded-lg transition-all duration-300">
                                                {link.menu}
                                            </p>
                                        </NavLink>
                                    )
                                })
                            }
                        </ul>
                    </aside >
                )
            }
        </>
    )
};

export default Navbar;