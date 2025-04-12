import React, { useState } from 'react';

const RegisterPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://bingenow-backend.onrender.com/customers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      setSuccess('Registration successful! You can now login.');
      setFormData({ userName: '', email: '', password: '' });
      
      // Close the modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', padding: '20px', borderRadius: '5px', textAlign: 'center' }}>
      <h2>Register here</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', border: '1px solid #72A0C1', borderRadius: '3px', padding: '5px', display: 'block', margin: '0 auto' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', border: '1px solid #72A0C1', borderRadius: '3px', padding: '5px', display: 'block', margin: '0 auto' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', border: '1px solid #72A0C1', borderRadius: '3px', padding: '5px', display: 'block', margin: '0 auto' }}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: '#72A0C1', color: '#1a1a1a', border: 'none', borderRadius: '3px', padding: '10px', cursor: 'pointer', display: 'block', margin: '30px auto' }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
