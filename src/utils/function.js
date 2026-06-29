

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

// get movie data 
export const getMovie = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const data = await res.json();
    return data?.results;
}


// get single movie data 
export const getSingleMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,images,videos`);
    const data = await res.json();
    return data;
}


// get tv data 
export const getTv = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`);
    const data = await res.json();
    return data?.results;
}


// get Celebs data 
export const getCelebs = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`);
    const data = await res.json();
    return data?.results;
}


// get single celebs data 
export const getSingleCelebs = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&append_to_response=combined_credits,images,external_ids`);
    const data = await res.json();
    return data;
}


export const search = async (name) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`);
    const data = await res.json();
    return data;
}


export const suggest = async (gen) => {

    const mov = {}

    mov.genres = "18";
    mov.minRuntime = 90;
    mov.maxRuntime = 150;
    mov.minRating = 7;
    mov.minVotes = 100;
    mov.releaseFrom = "2015-01-01";
    mov.releaseTo = "2025-12-31";
    mov.language = "en";
    mov.sortBy = "popularity.desc";
    mov.watchRegion = "IN";

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}` +
        `&with_genres=${gen}` +
        `&with_runtime.gte=${mov.minRuntime}` +
        `&with_runtime.lte=${mov.maxRuntime}` +
        `&vote_average.gte=${mov.minRating}` +
        `&vote_count.gte=${mov.minVotes}` +
        `&primary_release_date.gte=${mov.releaseFrom}` +
        `&primary_release_date.lte=${mov.releaseTo}` +
        `&with_original_language=${mov.language}` +
        `&sort_by=${mov.sortBy}` +
        `&watch_region=${mov.watchRegion}`);
    const data = await res.json();
    return data;
}