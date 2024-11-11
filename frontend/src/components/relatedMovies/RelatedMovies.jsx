import React, { useState } from 'react';
import useSimilarMovies from '../../hooks/useSimilarMovies';

const RelatedMovies = () => {
    const { similarMovies } = useSimilarMovies();
    console.log(similarMovies);


    return (
        <div>RelatedMovies</div>
    )
}

export default RelatedMovies