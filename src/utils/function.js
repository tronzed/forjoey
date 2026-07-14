

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

// get movie data 
export const getMovie = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const data = await res.json();
    return data?.results;
}


// get single movie data 
export const getSingleMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,images,videos,watch/providers`);
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


export const suggest = async (movData) => {


    console.log('suggest', movData);

    const mov = {}

    mov.genres = "18";
    mov.minRuntime = 90;
    mov.maxRuntime = 150;
    mov.minRating = 7;
    mov.minVotes = 100;
    mov.releaseFrom = "2005-01-01";
    mov.releaseTo = "2025-12-31";
    mov.language = "en";
    mov.sortBy = "popularity.desc";
    mov.watchRegion = "IN";

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}` +
        `&with_genres=${movData.genres}` +
        `&with_runtime.gte=${movData.minRuntime}` +
        `&with_runtime.lte=${movData.maxRuntime}` +
        `&vote_average.gte=${movData.minRating}` +
        `&primary_release_date.gte=${movData.releaseFrom + '-01-01'}` +
        `&primary_release_date.lte=${movData.releaseTo + '-12-31'}` +
        `&with_original_language=${movData.language}` +
        `&sort_by=${movData.sortBy}` +
        `&watch_region=IN&with_watch_providers=${movData.with_watch_providers}&with_watch_monetization_types=flatrate`
    );
    const data = await res.json();
    return data;
}




// watch list

export const watchListAdd = (data) => {

    fetch('https://forjoey-default-rtdb.firebaseio.com/watch_list.json', {

        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    });

}   