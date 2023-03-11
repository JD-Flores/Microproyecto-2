import React from 'react';

export function MovieCard () {
    return (
        <div className="bg-green-700 h-80 w-11/12 rounded-3xl shadow-lg p-4 text-xl flex">
            <img src="https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg" alt="poster" />
            <div>
                <h1 className="text-2xl bg-gray-500 font-bold">Titulo</h1>
                <h1 className="bg-gray-500">Popularidad</h1>
                <h1 className="bg-gray-500">Idioma</h1>
            </div>
            
        </div>
    )
}