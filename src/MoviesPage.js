import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the fake API
    fetch('https://bingenow-backend.onrender.com/media/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movies-page">
      <h2 style = {{color:" #72A0C1",marginLeft:"40px"}}>Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-card">
              <img src={movie.smallPosterPath} alt={movie.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;