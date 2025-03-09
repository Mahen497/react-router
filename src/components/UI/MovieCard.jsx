import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <p className="movie-type">{movie.Type}</p>
        <NavLink
          to={`/movie/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="movie-link"
        >
          View on IMDb
        </NavLink>
      </div>
    </div>
  );
};

export default MovieCard;
