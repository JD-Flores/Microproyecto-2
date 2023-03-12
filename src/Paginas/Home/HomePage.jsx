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

  let estrenos = 0;

  return (
    <div>
      <h1 className="text-4xl font-bold ml-8 mt-4">Peliculas</h1>
      <button className={`w-1/5 px-5 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg hover:text-slate-300 transition duration-400 ease-out m-4 ${estrenos === 0 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2'}`}>Peliculas Comunes</button>
      <button className={`w-1/5 px-5 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg hover:text-slate-300 transition duration-400 ease-out m-4 ${estrenos === 1 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2'}`}>Proximos estrenos</button>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  )
}
