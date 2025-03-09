import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Amazing Movies & TV Shows</h1>
        <p>Find the best-rated movies, trending TV shows, and hidden gems all in one place.</p>
        <Link to="/movies" className="btn">Explore Now</Link>
      </div>
    </div>
  );
};

export default HeroSection;
