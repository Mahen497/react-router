import { Link, useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
   // const params = useParams();


   const moviesDetail = useLoaderData();
   const {
      Title,
      Year,
      Genre,
      Director,
      Actors,
      Plot,
      Poster,
      imdbRating,
    } = moviesDetail;
    

   return (
      <>
         <div className="movie-detail-container">
            <div className="movie-detail-card">
               <img src={Poster} alt={Title} className="movie-detail-poster" />
               <div className="movie-detail-info">
                  <h1 className="movie-detail-title">{Title}</h1>
                  <p><strong>Year:</strong> {Year}</p>
                  <p><strong>Genre:</strong> {Genre}</p>
                  <p><strong>Director:</strong> {Director}</p>
                  <p><strong>Actors:</strong> {Actors}</p>
                  <p><strong>Plot:</strong> {Plot}</p>
                  <p><strong>IMDB Rating:</strong> ⭐ {imdbRating}</p>
                  <Link to="/" className="back-button">Go Back</Link>
               </div>
            </div>
         </div>
      </>
   )
}