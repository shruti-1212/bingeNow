import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/media/featured?type=movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="movie-list">
        {movies.slice(0,7).map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div key={movie.id} className="movie-card">
              <img src={movie.posterSmall} alt={movie.title} />
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;