import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/_moviePoster.scss';
import filledHeart from '../images/filled-heart.svg';
import heart from '../images/heart.svg';
import noPoster from '../images/no-movie-poster.jpg';
import {isMovieInStorage, setStorage, removeFromStorage} from '../utilities/StorageFavourites';

const dateFormat = (string) => {
    let options = {year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

function MovieCard({ movie, updateFavs }) {
    const [isLiked, setIsLiked] = useState(isMovieInStorage(movie));

    const addMovie = () => {
            const updatedFavMovies = setStorage(movie);
            setIsLiked(true);
            if(updateFavs !== undefined){
                updateFavs(updatedFavMovies);
            }
    }

    const removeMovie = () => {
        const updatedFavMovies = removeFromStorage(movie);
        setIsLiked(false);
        if(updateFavs !== undefined){
            updateFavs(updatedFavMovies);
        }
    }
    

    return (
        <div className='info-image-container'>
        <div className='poster-container'>
        <div className='hover-container'><p>{movie.overview}</p><div className="button-container">
                                <Link to={`/movie/${movie.id}`}><button className="movie-button">More Info</button></Link>
                            </div></div>
        <div className='hover-info-display'></div>
        {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" />:
                    <Link to={`/movie/${movie.id}`}><img className='mass-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></Link>
                }
        
            <div className='title-icon-container'>
            <p className='movie-title'>{movie.title}</p>
            </div>
            </div>
            <div className='movie-info-container'>

                <p className='movie-date'>{dateFormat(movie.release_date)}</p> 

               {isLiked === true ? <div>
                    <img src={filledHeart} alt='remove from favs' onClick= {() => removeMovie(movie)}/>
                </div> :
                <div>
                    <img src={heart} alt='add to favs' onClick= {() => addMovie(movie)}/>
                </div>}

            </div>
        
        
    )
        </div>
    )
}


export default MovieCard;
