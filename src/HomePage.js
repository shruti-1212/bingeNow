import React from 'react';
import Hero from './components/Hero';
import FeaturedMovies from './components/FeaturedMovies';
import FeaturedTVShows from './components/FeaturedTVShows';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedMovies />
      <FeaturedTVShows />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src="./images/actspotlight.png" alt="Image 1" style={{ width: '80%', marginBottom: '20px' }} />
        <img src="./images/cinemaspotlight.png"  alt="Image 2" style={{ width: '80%' }} />
      </div>
    </div>
  );
};

export default HomePage;