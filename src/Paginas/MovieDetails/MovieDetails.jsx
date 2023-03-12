import React from "react";

export function MovieDetails() {
    return (
        <div className="flex flex-wrap mt-3 ml-3">
            <div className="bg-fuchsia-500 w-96 h-96">
                {/* <img src="https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg" alt="poster" className=""/> */}\
                hola
            </div>

            <div className="p-4">
                <h1 className="text-2xl font-bold">Titulo</h1>
                <h1 className=""><span className="font-semibold">Popularidad:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Lista de generos:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Lenguaje original:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Presupuesto:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Descripción:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Rating de popularidad:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Compañias de producción:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Fecha de lanzamiento:</span>&nbsp;</h1>
                <h1 className=""><span className="font-semibold">Estado de la película:</span>&nbsp;</h1>
            </div>
        </div>
    );
}