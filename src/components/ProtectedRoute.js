import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userName = localStorage.getItem('userName');
  const email = localStorage.getItem('email');

  if (!isAuthenticated || !userName || !email) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;