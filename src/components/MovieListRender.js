import React from 'react';
import MovieItem from './Movie';


const API_IMG="https://image.tmdb.org/t/p/w300/"


const MovieListRender = ({ movies, addToCart }) => (
     movies.map(movie => (
        <div style={{ padding: 10 }}>
            <MovieItem imgURL={API_IMG+movie.poster_path} type={movie.type} price={movie.price} title={movie.title} addToCart={addToCart} />
        </div>
    )));

export default MovieListRender;