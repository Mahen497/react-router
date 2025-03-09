import FeaturedMovies from "../components/UI/FeaturedMovies";
import HeroSection from "../components/UI/HeroSection";

export const Home = () => {
   return (
      <>
         <div className="home-page">
            <HeroSection />
            <FeaturedMovies />
         </div>
      </>
   )
}