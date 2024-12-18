import React, { useEffect, useMemo, useState } from 'react'
import useUpcomingMovies from '../../hooks/useUpcomingMovies'
import './Corousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { CorouselSlceAction } from '../../redux/slices/CorouselSlice';
import ComponentHeading from '../componentHeading/ComponentHeading';
import { useMediaQuery } from "@mui/material";

const Corousel = () => {
    const { upcomingMov = [] } = useUpcomingMovies();
    const currIdx = useSelector((store) => store.Corousel.currIdx);
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery("(min-width:769px)");

    const backdropArr = useMemo(() => {
        if (!upcomingMov) return [];

        return upcomingMov
            .filter((movie) => movie.backdrop_path && movie.title)
            .map((movie) => ({
                title: movie.title,
                backdrop_path: movie.backdrop_path,
                release_date: movie.release_date
            }))
    }, [upcomingMov]);

    useEffect(() => {
        if (backdropArr.length === 0) return;

        let timerId = setInterval(() => {
            dispatch(CorouselSlceAction.addCorouselEffect(backdropArr));
        }, 7000);

        return () => {
            clearInterval(timerId);
        }
    }, [backdropArr.length]);

    return (
        <>
            {
                isDesktop && (
                    <section>
                        <ComponentHeading title={'Upcoming Hits'}></ComponentHeading>
                        <div className='hidden md:flex w-full my-3 relative'>

                            {
                                backdropArr.length > 0 && (
                                    <>
                                        <div className='absolute top-40 left-0 p-3 z-30 w-full text-center'>
                                            <h2 className='text-5xl text-gray-300 heading opacity-70 mb-2'>
                                                {backdropArr[currIdx].title}
                                            </h2>
                                            <p className='text-xl italic font-normal text-gray-400'>releasing on:
                                                <span className='text-xl text-gray-400 font-medium'>
                                                    {backdropArr[currIdx].release_date}
                                                </span>
                                            </p>
                                        </div>
                                        <img
                                            className='carousel-image'
                                            loading='lazy'
                                            src={`https://image.tmdb.org/t/p/w1280/${backdropArr[currIdx].backdrop_path}`}
                                            srcSet={`
                                        https://image.tmdb.org/t/p/w500/${backdropArr[currIdx].backdrop_path} 500w,
                                        https://image.tmdb.org/t/p/w780/${backdropArr[currIdx].backdrop_path} 780w,
                                        https://image.tmdb.org/t/p/w1280/${backdropArr[currIdx].backdrop_path} 1280w
                                    `}
                                            sizes="(max-width: 768px) 500px, (max-width: 1024px) 780px, 1280px"
                                            alt={backdropArr[currIdx].title}
                                        />

                                    </>
                                )
                            }
                            <div className='overlay'>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Corousel;