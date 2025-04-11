import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/customers/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data || 'Invalid email or password');
      }

      // Store authentication data
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', data.userName);
      localStorage.setItem('email', data.email);

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#72A0C1', 
      padding: '20px', 
      borderRadius: '5px', 
      textAlign: 'center',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      
      {error && (
        <div style={{ 
          color: 'red', 
          marginBottom: '15px',
          padding: '10px',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          borderRadius: '5px'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1a1a1a',
              color: '#72A0C1',
              border: '1px solid #72A0C1',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1a1a1a',
              color: '#72A0C1',
              border: '1px solid #72A0C1',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#72A0C1',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5a8ba8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#72A0C1'}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        Don't have an account?{' '}
        <span
          onClick={() => navigate('/register')}
          style={{
            color: '#72A0C1',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default LoginPage;