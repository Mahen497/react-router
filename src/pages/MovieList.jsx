import React, { useEffect, useState } from "react";
import MovieCard from "../components/UI/MovieCard";
import { useLoaderData } from "react-router-dom";

export const MovieList = () => {
  const movies = useLoaderData();
    
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch("https://www.omdbapi.com/?i=tt3896198&apikey=db459a9b&s=albela&page=1") // Replace with your API key
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data) {
  //         setMovies(data.Search);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching movies:", error));
  // }, []);
  // console.log(movies)

  return (
    <div className="movies-grid">
      {movies.Search.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}

      {/* {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))} */}
    </div>
  );
};

// export default MovieList;
