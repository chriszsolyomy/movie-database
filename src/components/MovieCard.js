import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/_moviePoster.scss';
import filledHeart from '../images/filled-heart.svg';
import heart from '../images/heart.svg';
import noPoster from '../images/no-movie-poster.jpg';
import {isMovieInStorage, setStorage, removeFromStorage} from '../utilities/StorageFavourites';
// import {AddMovie, RemoveMovie} from '../components/FavouriteAction';



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

        {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" />:
                    <Link to={`/movie/${movie.id}`}><img className='mass-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></Link>
                }
            </div>
            <div className='title-icon-container'>
            <p className='movie-title'>{movie.title}</p>
            
            </div>
            <div className='movie-info-container'>

                <p className='movie-date'>{movie.release_date}</p> 
                
                {/* <div>{isLiked ?
                 <img src={filledHeart} alt='remove from favs'  onClick ={() => setIsLiked(!isLiked)}/> :
                 <img src={heart} alt='add to favs'  onClick ={() => setIsLiked(!isLiked)}/>}</div>     */}
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

// function LikeHeart() {
//     return(
//         <svg id="like" xmlns="http://www.w3.org/2000/svg" width="20.363" height="18.633" viewBox="0 0 20.363 18.633">
//             <g id="like" transform="translate(0 0)" fill="#eb51b6">
//                 <path d="M10.182,18.633C4.707,14.913,1.836,11.528.658,8.7-2.5,1.1,6.514-2.526,10.182,1.955,13.849-2.526,22.859,1.1,19.7,8.7,18.527,11.528,15.656,14.913,10.182,18.633Z" stroke="none"/>
//                 <path d="M 10.18156433105469 17.41847038269043 C 14.62470436096191 14.31258678436279 17.59219741821289 11.17234897613525 18.78139495849609 8.311599731445312 C 19.8266544342041 5.796229362487793 19.27469444274902 4.112359523773193 18.62759399414062 3.142709493637085 C 17.74557495117188 1.821049571037292 16.14027404785156 1.000009536743164 14.43814468383789 1.000009536743164 C 13.03060436248779 1.000009536743164 11.79375457763672 1.564119577407837 10.95542430877686 2.58842945098877 L 10.18156433105469 3.533979654312134 L 9.407693862915039 2.58842945098877 C 8.569384574890137 1.564119577407837 7.332524299621582 1.000009536743164 5.924984455108643 1.000009536743164 C 4.2230544090271 1.000009536743164 2.61782431602478 1.821099519729614 1.73574435710907 3.14285945892334 C 1.088604331016541 4.112569332122803 0.5365743041038513 5.796459674835205 1.581694364547729 8.311489105224609 C 2.770930051803589 11.17234516143799 5.738424301147461 14.31258678436279 10.18156433105469 17.41847038269043 M 10.18156433105469 18.6329288482666 C 4.707004547119141 14.91254997253418 1.835814356803894 11.52799987792969 0.6582943201065063 8.695339202880859 C -2.496205568313599 1.104180216789246 6.514002799987793 -2.526150703430176 10.18156433105469 1.955079555511475 C 13.8491268157959 -2.52615213394165 22.85933303833008 1.104181051254272 19.704833984375 8.695339202880859 C 18.52731513977051 11.52799987792969 15.65612411499023 14.91254997253418 10.18156433105469 18.6329288482666 Z" stroke="none" fill="#fff"/>
//             </g>
//         </svg>
//     )
// }

// function UnLikeHeart() {
//     return(
//         <svg id="unlike" xmlns="http://www.w3.org/2000/svg" width="20.363" height="18.633" viewBox="0 0 20.363 18.633">
//             <g id="unlike" transform="translate(0 0)" fill="none">
//                 <path d="M10.182,18.633C4.707,14.913,1.836,11.528.658,8.7-2.5,1.1,6.514-2.526,10.182,1.955,13.849-2.526,22.859,1.1,19.7,8.7,18.527,11.528,15.656,14.913,10.182,18.633Z" stroke="none"/>
//                 <path d="M 10.18156433105469 17.41847038269043 C 14.62470436096191 14.31258678436279 17.59219741821289 11.17234897613525 18.78139495849609 8.311599731445312 C 19.8266544342041 5.796229362487793 19.27469444274902 4.112359523773193 18.62759399414062 3.142709493637085 C 17.74557495117188 1.821049571037292 16.14027404785156 1.000009536743164 14.43814468383789 1.000009536743164 C 13.03060436248779 1.000009536743164 11.79375457763672 1.564119577407837 10.95542430877686 2.58842945098877 L 10.18156433105469 3.533979654312134 L 9.407693862915039 2.58842945098877 C 8.569384574890137 1.564119577407837 7.332524299621582 1.000009536743164 5.924984455108643 1.000009536743164 C 4.2230544090271 1.000009536743164 2.61782431602478 1.821099519729614 1.73574435710907 3.14285945892334 C 1.088604331016541 4.112569332122803 0.5365743041038513 5.796459674835205 1.581694364547729 8.311489105224609 C 2.770930051803589 11.17234516143799 5.738424301147461 14.31258678436279 10.18156433105469 17.41847038269043 M 10.18156433105469 18.6329288482666 C 4.707004547119141 14.91254997253418 1.835814356803894 11.52799987792969 0.6582943201065063 8.695339202880859 C -2.496205568313599 1.104180216789246 6.514002799987793 -2.526150703430176 10.18156433105469 1.955079555511475 C 13.8491268157959 -2.52615213394165 22.85933303833008 1.104181051254272 19.704833984375 8.695339202880859 C 18.52731513977051 11.52799987792969 15.65612411499023 14.91254997253418 10.18156433105469 18.6329288482666 Z" stroke="none" fill="#fff"/>
//             </g>
//         </svg>
//     )
// }

export default MovieCard;
