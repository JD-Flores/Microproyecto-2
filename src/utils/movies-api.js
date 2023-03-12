import axios from "axios";

export async function fetchMovies(page) {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=69e576331d7baf30beab2a4c59945ff5&page=${page}`)
}

export async function fetchUpcomingMovies(page) {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=69e576331d7baf30beab2a4c59945ff5&page=${page}`)
}



