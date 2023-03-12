import { useState } from "react";
import { fetchUpcomingMovies } from "../utils/movies-api";

export function useUpcomingMovies() {
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(false);
    
    const getUpcomingMovies = async () => {
        setLoading(true)
        const {data} = await fetchUpcomingMovies()
        
        setMovies(data.results)
    }
    return {movies, isLoading, getUpcomingMovies}
}