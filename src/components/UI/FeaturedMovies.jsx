import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=albela&page=1`)
         .then((response) => response.json())
         .then((data) => {
            if (data && data.Search) {
               setMovies(data.Search);
            }
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error fetching movies:", error);
            setLoading(false);

         });
   }, []);

   console.log(movies);

   return (
      <div className="featured-section">
         <h2>🔥 Featured Movies list</h2>

         {loading ? (
            <p>Loading movies...</p>
         ) : (
            <div className="movies-container">
               {movies.map((movie) => (
                  <div key={movie.imdbID} className="movie-card">
                     <img src={movie.Poster} alt={movie.Title} />
                     <h3>{movie.Title}</h3>
                     <Link to={`/movie/${movie.imdbID}`} className="btn">
                        View Details
                     </Link>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default FeaturedMovies;
