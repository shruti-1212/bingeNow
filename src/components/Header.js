import React, { useState } from 'react';
import Modal from './Modal';
import RegisterForm from './RegisterPage';
import LoginForm from './LoginPage';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate(); // to navigate to a search results page or update route

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    try {
      // Optionally pass results to a search page, or log/display results
      const response = await fetch(`https://bingenow-backend.onrender.com/media/search?name=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log('Search results:', data);

      // You could navigate to a results page if implemented:
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`, { state: { results: data } });
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">BingeNow</Link>
      </div>
      <nav>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search movies or shows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-icon">
            <FaSearch />
          </button>
        </form>

        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <span className="nav-link" onClick={() => setIsRegisterOpen(true)}>
          Register
        </span>
        <span className="nav-link" onClick={() => setIsLoginOpen(true)}>
          Login
        </span>
      </nav>

      {/* Registration Modal */}
      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterForm onClose={() => setIsRegisterOpen(false)} />
      </Modal>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onClose={() => setIsLoginOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;
