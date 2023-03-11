import React from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'



export function HomePage() {

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
