import React from 'react';

export function MovieCard (props) {
    const { title, poster_path, original_language, popularity } = props.movie;

    return (
        <div className="h-auto w-11/12 rounded-3xl shadow-lg p-4 text-xl flex border-2 border-gray-100 max-w-sm items-center">
            <div className="h-auto w-1/2">
                <img src={"https://image.tmdb.org/t/p/w92/" + poster_path} alt="poster" className="w-full"/>
            </div>

            <div className="p-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h1 className=""><span className="font-semibold">Popularidad:</span>&nbsp;{popularity}</h1>
                <h1 className=""><span className="font-semibold">Idioma:</span>&nbsp;
                {props.languages && props.languages
                .filter(language => language.iso_639_1 === original_language)
                .map(language => language.english_name)
                }
                </h1>
            </div>
            
        </div>
    )
}