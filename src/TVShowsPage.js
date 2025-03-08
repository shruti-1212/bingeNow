import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TVShowsPage = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    // Fetch TV shows from the fake API
    fetch('https://bingenow.onrender.com/tvShows')
      .then((response) => response.json())
      .then((data) => setTVShows(data));
  }, []);

  return (
    <div className="tv-shows-page">
      <h2 style = {{color:" #72A0C1",marginLeft:"40px"}}>TV Shows</h2>
      <div className="tv-show-grid">
        {tvShows.map((tvShow) => (
          <Link key={tvShow.id} to={`/tv-show/${tvShow.id}`}>
            <div className="tv-show-card">
              <img src={tvShow.posterSmall} alt={tvShow.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TVShowsPage;