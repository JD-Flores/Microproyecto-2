import { useState } from "react";
import { fetchMovies, fetchUpcomingMovies, fetchMovieQuery } from "../utils/movies-api";

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(false);

    const getUpcomingMovies = async () => {
        setLoading(true)
        const {data} = await fetchUpcomingMovies()
        
        setMovies(data.results)
    }
    
    const getMovies = async () => {
        setLoading(true)
        const {data} = await fetchMovies()
        
        setMovies(data.results)
    }
    const getMovieQuery = async (search) => {
        setLoading(true)
        const {data} = await fetchMovieQuery(search)
        
        setMovies(data.results)
    }
    return {movies, isLoading, getMovies, getUpcomingMovies, getMovieQuery}
}

