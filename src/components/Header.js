import React, { useState } from 'react';
import Modal from './Modal';
import RegisterForm from './RegisterPage';
import LoginForm from './LoginPage';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/">BingeNow</Link>
      </div>
      <nav>
      <span className="nav-link">
          <FaSearch />
        </span>
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
