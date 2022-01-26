import IndividualMovieCard from "../components/IndividualMovieCard";
import {useState, useEffect} from 'react';
import Movies from '../components/Movies';
import { API_KEY } from "../globals/Variables";
import { useParams } from "react-router-dom";


function IndividualMovie({ movie }) {
    const {id}  = useParams();
    const [moviesData, setMoviesData] = useState(false);
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`);
            let moviesDataFromApi = await res.json();
            // moviesDataFromApi = moviesDataFromApi;
            setMoviesData(moviesDataFromApi);
            console.log(moviesDataFromApi);
        }
        fetchMovie();
    }, []);

    return (
        <section className='individual-page'>
            <IndividualMovieCard movie = {moviesData}/>
        </section>
    )
}

export default IndividualMovie;

