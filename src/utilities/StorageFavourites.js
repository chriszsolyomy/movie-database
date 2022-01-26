import { STORAGE_MOVIE_FAVS } from "../globals/Variables";

export const isMovieInStorage = (newItem) => {
    let favMovies = getStorage();
    if(!favMovies){
        return null;
    }
    if(favMovies.find(movie => movie.id === newItem.id)){
        return true;
    }
    return false;
}

export const setStorage = (newItem) => {

    let favMovies = getStorage();
    if( favMovies !== false){
        favMovies.push(newItem);
    }else{
        favMovies = [newItem];
    }
    const favMoviesForStorage = JSON.stringify(favMovies);
    localStorage.setItem(STORAGE_MOVIE_FAVS, favMoviesForStorage);
    return favMovies;
}

export const getStorage = (storageItem = STORAGE_MOVIE_FAVS) => {
    let item = localStorage.getItem(storageItem);
    if(item) {
        item = JSON.parse(item);
        return item;
    }else {
        return false;
    }
}

export const removeFromStorage = (movie) => {
    let items = getStorage();
    if(items === false){
        return false;
    }
    const Movie = (current) => current.id === movie.id;
    let indexOfMovieToRemove = items.findIndex(Movie);
    items.splice(indexOfMovieToRemove, 1);
    let movieForStorage = JSON.stringify(items);
    localStorage.setItem(STORAGE_MOVIE_FAVS, movieForStorage);
    return items;
}

export default getStorage;
