import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const FeaturedTVShows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('https://bingenow-backend.onrender.com/media/featured?type=tvshows')
      .then(response => response.json())
      .then(data => setTVShows(data));
  }, []);

  return (
    <section className="featured-tv-shows">
      <h2>Featured TV Shows</h2>
      <div className="tv-show-list">
        {tvShows.slice(0,7).map(tvShow => (
          <Link key={tvShow.id} to={`/tv-show/${tvShow.id}`}>
          <div key={tvShow.id} className="tv-show-card">
            <img src={tvShow.smallPosterPath} alt={tvShow.title} />
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTVShows;