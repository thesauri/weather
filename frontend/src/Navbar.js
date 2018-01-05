import React from 'react';

const Navbar = () => (
  <nav className="navbar is-info" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item is-size-2 has-text-weight-bold">
          <span className="icon"><i className="fa fa-sun-o"></i></span>
          <span className="media-right">Weather</span>
      </a>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/thesauri/weather"
          target="_blank"
          rel="noopener noreferrer">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
          <span>Github</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;