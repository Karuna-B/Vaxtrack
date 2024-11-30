// components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

  if (!token) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
