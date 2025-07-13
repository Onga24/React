// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdb'; // Import your configured axios instance

// Base URLs for different image sizes from TMDb
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // For main poster
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280'; // For background backdrop

function MovieDetails() {
  const { movieId } = useParams(); // Get the dynamic movie ID from the URL parameter
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true); // Set loading state
        setError(null); // Clear previous errors

        // Fetch movie details using the ID from the URL params
        const response = await tmdbApi.get(`/movie/${movieId}`);
        setMovie(response.data); // Update movie state with fetched data
      } catch (err) {
        console.error(`Error fetching movie details for ID ${movieId}:`, err);
        // Provide a user-friendly error message
        setError("Failed to fetch movie details. It might not exist or there's a network issue.");
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    if (movieId) { // Only fetch if movieId is available from the URL
      fetchMovieDetails();
    }
  }, [movieId]); // Re-run effect if movieId changes (e.g., navigating between movie details)

  // Conditional rendering for loading, error, and data states
  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2 text-muted">Loading movie details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        <h4 className="alert-heading">Error!</h4>
        <p>{error}</p>
        <hr />
        <p className="mb-0">Please ensure the movie ID is valid or check your internet connection.</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="alert alert-info text-center my-5" role="alert">
        <h4 className="alert-heading">No Movie Found</h4>
        <p>The movie details could not be loaded. It might not exist.</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {/* Backdrop image for a cinematic background effect */}
      {movie.backdrop_path && (
        <div className="position-relative mb-4" style={{ height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
          <img
            src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
            className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
            style={{ filter: 'brightness(0.4) blur(3px)' }} // Darken and blur the backdrop
          />
          {/* Overlay for the movie title on the backdrop */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white p-3">
            <h1 className="display-4 text-center fw-bold text-shadow-lg">{movie.title}</h1>
          </div>
        </div>
      )}

      {/* Main movie details card */}
      <div className="card bg-dark text-white shadow-lg p-4 rounded-3 border-0">
        <div className="row g-4">
          <div className="col-md-4 d-flex justify-content-center">
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
            ) : (
              // Placeholder if no poster is available
              <div className="d-flex align-items-center justify-content-center bg-secondary text-muted rounded-3" style={{ width: '300px', height: '450px' }}>
                No Poster Available
              </div>
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body p-0">
              {/* Movie title and tagline */}
              <h2 className="card-title text-primary">{movie.title}</h2>
              {movie.tagline && <p className="card-text fst-italic text-muted">{movie.tagline}</p>}

              {/* Movie details like release date, rating, runtime, genres */}
              <p className="card-text">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p className="card-text">
                <strong>Rating:</strong>{' '}
                <span className="badge bg-info fs-6">{movie.vote_average.toFixed(1)} / 10</span>{' '}
                <span className="text-muted">({movie.vote_count} votes)</span>
              </p>
              {movie.runtime > 0 && (
                <p className="card-text">
                  <strong>Runtime:</strong> {movie.runtime} minutes
                </p>
              )}
              {movie.genres && movie.genres.length > 0 && (
                <p className="card-text">
                  <strong>Genres:</strong>{' '}
                  {movie.genres.map((g) => (
                    <span key={g.id} className="badge bg-secondary me-1 mb-1">{g.name}</span>
                  ))}
                </p>
              )}

              {/* Movie overview */}
              <h3 className="mt-4 text-primary">Overview</h3>
              <p className="card-text">{movie.overview || 'No overview available.'}</p>

              {/* Link to movie homepage if available */}
              {movie.homepage && (
                <p className="mt-3">
                  <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                    Visit Homepage <i className="bi bi-box-arrow-up-right"></i> {/* Bootstrap Icons */}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
