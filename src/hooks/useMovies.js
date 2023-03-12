import { useState } from "react";
import { fetchMovies } from "../utils/movies-api";
import { fetchUpcomingMovies } from "../utils/movies-api";
import { fetchMovieById } from "../utils/movies-api";

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [movie, setMovie] = useState({})

    const getUpcomingMovies = async () => {
        setLoading(true)
        const {data} = await fetchUpcomingMovies()
        setMovies(data.results)
        setLoading(false)
    }
    
    const getMovies = async () => {
        setLoading(true)
        const {data} = await fetchMovies()
        setMovies(data.results)
        setLoading(false)
    }

    const getMovieById = async (movie_id) => {
        setLoading(true)
        const {data} = await fetchMovieById(movie_id)
        setMovie(data)
        setLoading(false)
    }

    return {movies, isLoading, getMovies, getUpcomingMovies, getMovieById, movie}
}
