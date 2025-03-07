import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
import TVShowsPage from './TVShowsPage';
import TVShowDetails from './TVShowDetailsPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movie/:id" element={<MovieDetailsPage />} />
          <Route path="tv-shows" element={<TVShowsPage />} />
          <Route path="tv-show/:id" element={<TVShowDetails />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
