import React from 'react'
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* me-auto pushes links to left, ms-auto to right */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Movie List</NavLink> {/* `end` for exact match */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nonexistent-page">Not Found Demo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
