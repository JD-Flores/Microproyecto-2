import axios from "axios";

export async function fetchMovies() {
    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=69e576331d7baf30beab2a4c59945ff5")
}

export async function fetchUpcomingMovies() {
    return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=69e576331d7baf30beab2a4c59945ff5")
}

export async function fetchMovieQuery(search){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=69e576331d7baf30beab2a4c59945ff5&query=${search}`)
}