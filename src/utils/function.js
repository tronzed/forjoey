
// get movie data 
export const getMovie = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=809cc654f2b83dc754aa801cc1302ac1`);
    const data = await res.json();
    return data?.results;
}


// get single movie data 
export const getSingleMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=809cc654f2b83dc754aa801cc1302ac1`);
    const data = await res.json();
    return data;
}


// get tv data 
export const getTv = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=809cc654f2b83dc754aa801cc1302ac1`);
    const data = await res.json();
    return data?.results;
}

