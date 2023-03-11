import React from 'react';

export function MovieCard () {
    return (
        <div className="h-auto w-11/12 rounded-3xl shadow-lg p-4 text-xl flex border-2 border-gray-100 max-w-sm items-center">
            <div className="h-auto w-1/2">
                <img src="https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg" alt="poster" className="w-full"/>
            </div>
            
            <div className="p-4">
                <h1 className="text-2xl font-bold">Titulo</h1>
                <h1 className=""><span className="font-semibold">Popularidad:</span>&nbsp;180.000</h1>
                <h1 className=""><span className="font-semibold">Idioma:</span>&nbsp;en</h1>
            </div>
            
        </div>
    )
}