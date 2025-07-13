// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4 text-white">Page Not Found</h2>
      <p className="lead text-white-50 mb-4">Oops! The page you're looking for does not exist.</p>
      {/* Link to go back to the home page */}
      <Link to="/" className="btn btn-primary btn-lg">Go to Home Page</Link>
    </div>
  );
}

export default NotFound;
