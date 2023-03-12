import React, { useEffect } from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'
import searchicon from '../../assets/search.png'
import { useMovies } from '../../hooks/useMovies'

export function SearchPage() {

  const { movies, isLoading, getMovies } = useMovies();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex flex-row justify-center h-15 w-11/12 bg-sky-700 my-5 p-4 rounded-full drop-shadow-lg">
        <div className="flex flex-row justify-center bg-gray-100 w-2/3 p-2 rounded-lg mx-5">
          <img src={searchicon} alt="(search icon)" className='w-[20px] h-[20px] mx-5'></img>
          <input type="text" className="w-4/5 rounded-lg px-5 font-comfortaa" placeholder="Busca el nombre de una película"></input>
        </div>
        <button className='bg-slate-300 px-5 font-comfortaa text-blue-900 rounded-lg drop-shadow-lg hover:bg-slate-400 hover:text-neutral-200 transition duration-400 ease-out px-5'>Buscar</button>
      </div>

      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
        ))}
      </div>
      
    </div>
  )
}
