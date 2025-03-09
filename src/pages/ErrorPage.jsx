import { useNavigate, NavLink } from "react-router-dom"

export const ErrorPage = () => {
   const navigate  = useNavigate();
   const handleGoBack = () => {
      navigate(-1);
   }

   return (
      <>
         <div className="error-container">
            <h1 className="error-code">404</h1>
            <h2 className="error-message">Oops! Page Not Found</h2>
            <p className="error-description">
               The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <NavLink to="/" className="home-button">Go Back Home</NavLink>

            <button className="home-button" onClick={handleGoBack}>Go Back Home</button>
         </div>
      </>
   )
}