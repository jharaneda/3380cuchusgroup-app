import React from 'react'
import {Link} from 'react-router-dom'

const NavbarJar86 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>Hotel Canada</h3>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link active" aria-current="page">
              Health and Wellness
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/healthReport" className="nav-link active" aria-current="page">
              Missing Person Report
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link active" aria-current="page">
              Tenant Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/incident" className="nav-link active" aria-current="page">
              Incident Report
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/weather" className="nav-link active" aria-current="page">
              Weather widget
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default NavbarJar86
