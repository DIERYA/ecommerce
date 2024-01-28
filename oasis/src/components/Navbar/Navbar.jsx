import React from "react";
import logo from "../../images/logo-cropped.png";
import "./NavbarStyles.css";
import Categories from "../Categories/Categories";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand logo-container" href="/">
            <img src={logo} className="logo" alt="Oasis" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse search-bar" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <div className="dropdown-arrow">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    All
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>

                <form className="d-flex search">
                  <input className="form-control me-sm-2" type="search" placeholder="Search"></input>
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Categories />
    </div>
  );
};

export default Navbar;
