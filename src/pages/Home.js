import {useState, useEffect} from "react";
import { API_KEY } from "../globals/Variables";
import Movies from '../components/Movies';
import '../styles/components/_moviePoster.scss';




   

function Home({ sort }) {
    const [moviesData, setMoviesData] = useState(null);
    useEffect(() => {
        
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            let moviesDataFromApi = await res.json();
            moviesDataFromApi = moviesDataFromApi.results.splice(0, 12);
            setMoviesData(moviesDataFromApi);
        }
        fetchMovies();


    }, [sort]);
    return (
        <section className='home-page'>
            {moviesData !== null && <Movies movies ={moviesData}/>}
        </section>
    )
}

export default Home;
