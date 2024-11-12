import React, { useState } from 'react';
import useSimilarMovies from '../../hooks/useSimilarMovies';
import MovieCard from '../movieCard/MovieCard';
import './RelatedMovies.css';

const RelatedMovies = () => {
    const { similarMovies } = useSimilarMovies();

    return (
        <div className='related-movies-container'>
            {
                similarMovies && similarMovies.length > 0 && similarMovies.slice(0, 7).map((movie, index) => {
                    return (
                        <MovieCard key={index}
                            title={movie.title}
                            poster_path={movie.poster_path}
                        ></MovieCard>
                    )
                })
            }
        </div>
    )
}

export default RelatedMovies