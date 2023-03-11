import React, { useEffect, useState } from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'
import { fetchMovies } from '../../utils/movies-api'



export function HomePage() {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true)
    const {data} = await fetchMovies()
    setMovies(data.results)

    console.log(data) 
  }

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <div className="flex flex-col items-center pt-4">
      <MovieCard/>
    </div>
  )
}
