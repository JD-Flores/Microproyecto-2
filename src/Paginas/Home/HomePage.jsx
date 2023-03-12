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

  }

  useEffect(() => {
    getMovies();
  }, []);

  const getUpcomingMovies = async () => {
    setLoading(true)
    const {data} = await fetchUpcomingMovies()
    
    setMovies(data.results)

  }

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <div>
      <h1 className="text-4xl font-bold ml-8 mt-4">Peliculas</h1>
      <button>Proximos estrenos</button>
      <button>Peliculas Comunes</button>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  )
}
