import React from 'react';

const LoginPage = ({ onClose }) => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', padding: '0.5px', borderRadius: '5px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <input type="email" id="email" name="email" placeholder="Email" required style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', border: '1px solid #72A0C1', borderRadius: '3px', padding: '5px', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="password" id="password" name="password" placeholder="Password" required style={{ backgroundColor: '#1a1a1a', color: '#72A0C1', border: '1px solid #72A0C1', borderRadius: '3px', padding: '5px', display: 'block', margin: '0 auto' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#72A0C1', color: '#1a1a1a', border: 'none', borderRadius: '3px', padding: '10px', cursor: 'pointer', display: 'block', margin: '30px auto' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
