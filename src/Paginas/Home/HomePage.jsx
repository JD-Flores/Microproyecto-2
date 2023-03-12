import React, { useEffect, useState } from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'
import { useLanguages } from '../../hooks/useLanguages'
import { Link } from 'react-router-dom';

export function HomePage() {

  const { movies, upcoming, total_pages, isLoading, getMovies, getUpcomingMovies, getMovieQuery, getMovieById, movie } = useMovies();
  const { languages, isLoadingLanguages, getLanguages } = useLanguages();
  const [estrenos, setEstrenos] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies();
    getLanguages();
  }, []);

  useEffect(() => {
   getUpcomingMovies();
   getLanguages();
  }, []);
  console.log(estrenos)

  const nextPage = () => {
    if(page < total_pages) {
      setPage(page+1)
      getMovies(page)
    }
  }

  const previousPage = () => {
    if(page !== 1) {
      page -=1
      getMovies(page)
    }
  }

  function mostrar(param){
    if (param===1){
      return(
      upcoming.map((movie, idx) => (
        <Link to={`/movie/${movie.id}`}>
          <MovieCard key={idx} movie={movie} languages={languages}/>
        </Link>)))
    }else{
      return(
      movies.map((movie, idx) => (
        <Link to={`/movie/${movie.id}`}>
          <MovieCard key={idx} movie={movie} languages={languages}/>
        </Link>)))
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold font-sono ml-8 mt-4">Peliculas</h1>
      <button onClick={setEstrenos(0)} className={`w-1/5 px-5 py-2 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg transition duration-400 ease-out m-4 ${estrenos === 0 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2 hover:text-slate-300'}`}>Películas</button>
      <button onClick={setEstrenos(1)} className={`w-1/5 px-5 py-2 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg transition duration-400 ease-out m-4 ${estrenos === 1 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2 hover:text-slate-300'}`}>Proximos estrenos</button>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {mostrar(estrenos)}
      </div>
      <div className='flex justify-center'>
      <button onClick={previousPage} className={`w-1/10 px-5 py-2 font-comfortaa text-gray-100 rounded-lg drop-shadow-lg transition duration-400 ease-out m-4 bg-sky-700 border-solid border-slate-600 border-2 hover:text-slate-300`}>&lt; </button>
      <p className={`w-1/10 px-5 py-2 font-comfortaa text-gray-900 drop-shadow-lg m-4`}>{page}</p>
      <button onClick={nextPage} className={`w-1/10 px-5 py-2 font-comfortaa text-gray-100 rounded-lg drop-shadow-lg transition duration-400 ease-out m-4 bg-sky-700 border-solid border-slate-600 border-2 hover:text-slate-300`}>&gt;</button>
      </div>
    </div>
  )
}
 