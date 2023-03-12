import React from "react";

export function MovieDetails() {
    
    return (
        <div className="flex flex-col m-5 md:flex-row">
            <div className="w-full flex items-center justify-center content-center md:max-w-xs lg:max-w-sm">
                <img src="https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg" alt="poster" className="w-full max-w-md"/>
            </div>

            <div className="p-4 w-full text-xl md:text-2xl lg:text-3xl">
                <div className="flex items-center justify-center w-full md:justify-start md:mb-6">
                    <h1 className="text-4xl font-bold md:text-6xl">Titulo</h1>
                </div>
                    <h1 className=""><span className="font-semibold">Popularidad:</span>&nbsp;jdwbjdbdbw</h1>
                    <h1 className=""><span className="font-semibold">Lista de generos:</span>&nbsp;sadsdasdasda</h1>
                    <h1 className=""><span className="font-semibold">Lenguaje original:</span>&nbsp;jdwbbdwbdw</h1>
                    <h1 className=""><span className="font-semibold">Presupuesto:</span>&nbsp;jdwbbdwbdwj</h1>
                    <h1 className=""><span className="font-semibold">Descripción:</span>&nbsp;dbdwbdhw</h1>
                    <h1 className=""><span className="font-semibold">Rating de popularidad:</span>&nbsp;dwdwdwdw</h1>
                    <h1 className=""><span className="font-semibold">Compañias de producción:</span>&nbsp;dwdwdwd</h1>
                    <h1 className=""><span className="font-semibold">Fecha de lanzamiento:</span>&nbsp;dwdwdwdw</h1>
                    <h1 className=""><span className="font-semibold">Estado de la película:</span>&nbsp;dwdjwbdwjdw</h1>
            </div>
        </div>
    );
}