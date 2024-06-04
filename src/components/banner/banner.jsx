import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import './banner.css';

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`trending/movie/day?language=en-US&page=1&api_key=${API_KEY}`)
            .then(response => {
                const movies = response.data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(randomMovie);
            })
            .catch(error => {
                console.error('Error fetching trending movies:', error);
            });
    }, []);

    return (
        <div className='Banner' style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}>
            {movie && (
                <div className='banner_contents'>
                    <h1>{movie.title}</h1>
                    <div className='banner_buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <div className='banner_des'>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
