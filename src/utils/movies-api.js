import axios from "axios";
import { useEffect } from "react";

export async function fetchMovies() {
    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=69e576331d7baf30beab2a4c59945ff5")
}

