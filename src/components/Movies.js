import MovieCard from "./MovieCard";

function Movies({movies, updateFavs}) {
    return (
        <div className="movie-container">
            {movies.map(movie =><MovieCard key={movie.id} movie={movie} updateFavs={updateFavs} /> )}
        </div>
    )
}

export default Movies;
