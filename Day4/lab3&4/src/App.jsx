import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import Watchlist from './components/Watchlist'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <Navbar /> {/* The Navbar will be visible on all pages */}
      <main className="flex-grow-1 container-fluid py-4"> {/* Main content area, takes available space */}
        {/* Routes component to define application routes */}
        <Routes>
          {/* Route for the Movie List page (home page) */}
          <Route path="/" element={<MovieList />} />
          {/* Dynamic route for Movie Details, where :movieId is a URL parameter */}
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          {/* Route for the Watchlist page */}
          <Route path="/watchlist" element={<Watchlist />} />
          {/* Catch-all route for any undefined paths (404 Not Found) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
