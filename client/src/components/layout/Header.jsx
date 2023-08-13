import React from "react";
import { NavLink} from "react-router-dom";

function Header() {

  return (
    <>
      <div className="bg-dark text-light px-4 py-1 fw-lighter">
        <span style={{ letterSpacing: "0.2em" }}>
          Free Registration (Mail-tournament@123.com)
        </span>
        <span className="float-end">Call us : +012-3456789</span>
      </div>
      <nav className="container-fluid navbar bg-light navbar-expand-md shadow sticky-top bg-nav opacity-75">
        <div className="container text-uppercase fs-6 lh-lg ">
          {/* Logo */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div
              className="navbar-nav fs-5 ms-auto fw-bold text-black "
              style={{ letterSpacing: "0.2rem" }}
            >
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
             <NavLink to="/tournament" className="nav-link">
                   Tournament
                  </NavLink>
                  <NavLink to="/plan" className="nav-link">
                   Participant
                  </NavLink>
                  <NavLink to="/admin" className="nav-link">
                    Admin
                  </NavLink>

             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
