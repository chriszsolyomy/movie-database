import { useState } from "react";
import Movies from "../components/Movies";
import getStorage from "../utilities/StorageFavourites";

function Favourites() {


    const [favMovies, setFavMovies] = useState(getStorage());

    function updateFavs(movies){
        setFavMovies(movies);
    }



    return (
        <section className='home-page'>
            {/* <p className="favourites-title">Your Favourites</p> */}

            {favMovies.length > 0 ? <Movies movies={favMovies} updateFavs={updateFavs} /> : <p className="noFavs">No movies have been added to your favourites. Please click on the heart icon in order to save your favourite movies here.</p>}
        </section>
    )
}

export default Favourites
