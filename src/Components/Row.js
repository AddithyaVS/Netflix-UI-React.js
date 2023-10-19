import React from "react";
import { useEffect, useState } from "react";
import instance from "./Instance";
import'./Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  console.log("data is", movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie_posters">
        {movies.map((movie) => (
          <img
            className="movie_poster"
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;