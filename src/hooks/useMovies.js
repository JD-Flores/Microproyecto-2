import { useState } from "react";
import { fetchMovies } from "../utils/movies-api";

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(false);
    
    const getMovies = async () => {
        setLoading(true)
        const {data} = await fetchMovies()
        
        setMovies(data.results)
    }
    return {movies, isLoading, getMovies}
}