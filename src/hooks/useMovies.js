import { useState } from "react";
import { fetchMovies } from "../utils/movies-api";

import { fetchUpcomingMovies } from "../utils/movies-api";

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [total_pages, setPages] = useState()
    const [isLoading, setLoading] = useState(false);

    const getUpcomingMovies = async (page) => {
        setLoading(true)
        const {data} = await fetchUpcomingMovies(page)
        
        setPages(data.total_pages)
        setMovies(data.results)
        setLoading(false)
    }
    
    const getMovies = async (page) => {
        setLoading(true)
        const {data} = await fetchMovies(page)
        
        setPages(data.total_pages)
        setMovies(data.results)
        setLoading(false)
    }
    return {movies, total_pages, isLoading, getMovies, getUpcomingMovies}
}

