import React from 'react';
import logo from '../images/logo-cropped.png';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-light' data-bs-theme='light'>
      <div class='container-fluid'>
        <a class='navbar-brand logo-container' href='#'>
          <img src={logo} className='logo' alt='Oasis' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor03'
          aria-controls='navbarColor03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarColor03'>
          <ul class='navbar-nav me-auto'>
            <li class='nav-item dropdown'>
              <div className='dropdown-arrow'>
                <a
                  class='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  All
                </a>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                  <div class='dropdown-divider'></div>
                  <a class='dropdown-item' href='#'>
                    Separated link
                  </a>
                </div>
              </div>

              <form class='d-flex search'>
                <input
                  class='form-control me-sm-2'
                  type='search'
                  placeholder='Search'
                ></input>
                <button class='btn btn-secondary my-2 my-sm-0' type='submit'>
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
