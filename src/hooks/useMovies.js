import { useState } from "react";
import { fetchMovies } from "../utils/movies-api";

import { fetchUpcomingMovies } from "../utils/movies-api";

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
    return {movies, isLoading, getMovies, getUpcomingMovies}
}

