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
    <div>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-3 mt-12">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  )
}
