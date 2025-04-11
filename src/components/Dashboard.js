import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadCustomerData = () => {
      const userName = localStorage.getItem('userName');
      const email = localStorage.getItem('email');
      
      if (!userName || !email) {
        console.log('Customer data not found, redirecting to login');
        navigate('/login');
        return;
      }

      setCustomer({
        userName: userName,
        email: email
      });
    };

    loadCustomerData();
  }, [navigate]);

  const handleLogout = () => {
    // Clear all stored data
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
        <h2>Error</h2>
        <p>{error}</p>
        <button 
          onClick={() => navigate('/login')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1a1a1a',
            color: '#72A0C1',
            border: '1px solid #72A0C1',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Return to Login
        </button>
      </div>
    );
  }

  if (!customer) {
    return (
      <div style={{ padding: '20px', color: '#72A0C1', textAlign: 'center' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard" style={{ padding: '20px', color: '#72A0C1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Welcome, {customer.userName}!</h1>
        <button 
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1a1a1a',
            color: '#72A0C1',
            border: '1px solid #72A0C1',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2a2a2a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#1a1a1a'}
        >
          Logout
        </button>
      </div>

      <div className="profile-section" style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '20px', 
        borderRadius: '5px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ marginBottom: '15px', color: '#72A0C1' }}>Profile Information</h2>
        <div style={{ marginTop: '15px' }}>
          <p style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#72A0C1' }}>Username:</strong> {customer.userName}
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#72A0C1' }}>Email:</strong> {customer.email}
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#72A0C1' }}>Member Since:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="activity-section" style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '20px', 
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ marginBottom: '15px', color: '#72A0C1' }}>Recent Activity</h2>
        <div style={{ marginTop: '15px' }}>
          <p>No recent activity</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 