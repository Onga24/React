// src/pages/MovieList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tmdbApi from '../api/tmdb'; // Import your configured axios instance

// Base URL for TMDb movie posters
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching
        setError(null); // Clear any previous errors

        // Make API request to get popular movies
        const response = await tmdbApi.get('/movie/popular');
        setMovies(response.data.results); // Update movies state with fetched data
      } catch (err) {
        console.error("Error fetching popular movies:", err);
        setError("Failed to fetch movies. Please check your network and API key.");
      } finally {
        setLoading(false); // Set loading state to false after fetch completes (success or error)
      }
    };

    fetchMovies(); // Call the fetch function when the component mounts

  }, []); // Empty dependency array ensures this effect runs only once

  // Conditional rendering for loading, error, and data states
  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2 text-muted">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        <h4 className="alert-heading">Error!</h4>
        <p>{error}</p>
        <hr />
        <p className="mb-0">Please ensure your API token is correct and your internet connection is stable.</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 text-primary">Popular Movies</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            {/* Link to Movie Details page using dynamic route */}
            <Link to={`/movie/${movie.id}`} className="card h-100 bg-secondary text-white shadow-sm text-decoration-none transition-transform-hover">
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ height: '300px', objectFit: 'cover' }} // Fixed height for consistent card size
                />
              ) : (
                // Placeholder if no poster is available
                <div className="d-flex align-items-center justify-content-center bg-dark text-muted" style={{ height: '300px' }}>
                  No Poster Available
                </div>
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{movie.title}</h5>
                <p className="card-text mt-auto">
                  Rating: <span className="badge bg-info">{movie.vote_average.toFixed(1)}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
