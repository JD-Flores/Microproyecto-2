import React, { useEffect } from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'
import { useUpcomingMovies } from '../../hooks/useUpcomingMovies'

export function HomePage() {

  const { movies, isLoading, getMovies } = useMovies();

  useEffect(() => {
    getMovies();
  }, []);

  const { upcomingMovies, isUpcomingLoading, getUpcomingMovies } = useUpcomingMovies();

  useEffect(() => {
    getUpcomingMovies();
  }, []);
  let estrenos = 0;

  return (
    <div>
      <h1 className="text-4xl font-bold ml-8 mt-4">Peliculas</h1>
      <button className={`w-1/5 px-5 py-2 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg transition duration-400 ease-out m-4 ${estrenos === 0 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2 hover:text-slate-300'}`}>Peliculas Comunes</button>
      <button className={`w-1/5 px-5 py-2 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg transition duration-400 ease-out m-4 ${estrenos === 1 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2 hover:text-slate-300'}`}>Proximos estrenos</button>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  )
}
