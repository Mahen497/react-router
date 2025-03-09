import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MovieList } from './pages/MovieList';
import { Contact, contactData } from './pages/Contact';
import AppLayout from './components/Layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';

import { GetMoviesData } from './api/GetApiData';
import { GetMovieDetails } from './api/GetMovieDetails';

import { MovieDetails } from './components/UI/MovieDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/movie", element: <MovieList />,
          loader: GetMoviesData,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        }
      ]
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element= {<Home/>}/>
  //       <Route path="/about" element= {<About/>}/>
  //       <Route path="/contact" element= {<Contact/>}/>
  //     </Route>
  //   )
  // );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
