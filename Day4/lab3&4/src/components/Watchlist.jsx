// src/pages/Watchlist.jsx
import React from 'react';

function Watchlist() {
  return (
    <div className="container text-center my-5">
      <h1 className="text-primary mb-4">Your Watchlist</h1>
      <p className="lead text-white-50">
        This is where your favorite movies will appear!
      </p>
      <p className="text-white-50">
        (To implement, you would typically use local storage or a backend to manage the list.)
      </p>
      <div className="mt-4">
        {/* You can add a button or link to go back to movie list */}
        <a href="/" className="btn btn-outline-primary">Browse Movies</a>
      </div>
    </div>
  );
}

export default Watchlist;
