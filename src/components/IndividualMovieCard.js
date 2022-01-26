import { Link } from "react-router-dom";
import { useState } from "react";
import moviePoster from "../images/massImg.png";
import "../styles/components/_moviePoster.scss";
import "../styles/components/_individualMovie.scss";
import noPoster from "../images/no-movie-poster.jpg";
import {
  isMovieInStorage,
  setStorage,
  removeFromStorage,
} from "../utilities/StorageFavourites";
import filledHeart from "../images/filled-heart.svg";
import heart from "../images/heart.svg";

const dateFormat = (string) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
};

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
}

function IndividualMovieCard({ movie, updateFavs }) {
  const [isLiked, setIsLiked] = useState(isMovieInStorage(movie));

  const addMovie = () => {
    const updatedFavMovies = setStorage(movie);
    setIsLiked(true);
    if (updateFavs !== undefined) {
      updateFavs(updatedFavMovies);
    }
  };

  const removeMovie = () => {
    const updatedFavMovies = removeFromStorage(movie);
    setIsLiked(false);
    if (updateFavs !== undefined) {
      updateFavs(updatedFavMovies);
    }
  };

  if (!movie) {
    return null;
  } else {
    return (
      <>
        <div className="indiv-poster-container">
          {movie.poster_path === null ? (
            <img src={noPoster} alt="No Poster" />
          ) : (
            <img
              className="mass-poster indiv-mass-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}

          <div className="indiv-title-and-heart">
            <p className="indiv-movie-title">{movie.title}</p>
            <div className="indiv-heart">
              {isLiked === true ? (
                <div>
                  <img
                    src={filledHeart}
                    alt="remove from favs"
                    onClick={() => removeMovie(movie)}
                  />
                </div>
                ) : (
                <div>
                  <img
                    src={heart}
                    alt="add to favs"
                    onClick={() => addMovie(movie)}
                  />
                </div>
                )}
              </div>
          </div>

          <div className="hLineShort indivline1"></div>

          <p className="indiv-movie-descrip">{movie.overview}</p>

          <div className="indiv-movie-info-container indiv-details">
            <div className="details-info">
              {movie.genres.length === 0 ? (
                <p className="no-genre">N/A</p>
              ) : (
                <p className="indiv-movie-genre">
                  Genres:{" "}
                  {movie.genres.map((genres) => genres.name).length > 1
                    ? movie.genres.map((genres) => genres.name).join(", ")
                    : movie.genres.map((genres) => genres.name)}
                </p>
              )}
            </div>
            <p className="indiv-release-date">
              Release Date: {dateFormat(movie.release_date)}
            </p>
            <p className="indiv-language">
              Original Language: {movie.original_language}
            </p>
            <p className="indiv-run-time">
              Runtime: {timeConvert(movie.runtime)}
            </p>
            <p className="indiv-view-rating">
              Rating: {movie.vote_average * 10}%
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default IndividualMovieCard;
