import React from 'react';
import NavLink from './nav-link';

const Nav = props => (
  <div className="bg-light">
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <ul className="nav-links">
          <NavLink href="/about">
            <a href="/about" className="nav-link p-3">
              About
            </a>
          </NavLink>
          <NavLink href="/work">
            <a href="/work" className="nav-link p-3">
              Works
            </a>
          </NavLink>
          <NavLink href="/contact">
            <a href="/contact" className="nav-link p-3 py-md-3 pr-md-0 pl-md-3">
              Get in touch
            </a>
          </NavLink>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex align-items-center justify-content-between py-3">
            <div>
              <NavLink href="/">
                <a href="/">
                  <h1 className="text-dark">John Kueh</h1>
                </a>
              </NavLink>
              <h3 className="text-secondary font-weight-light">Crafting thoughtful products.</h3>
            </div>
            <div>
              <NavLink href="/">
                <a href="/">
                  <img alt="jigsaw" width="80" src="/static/images/jigsaw.svg" />
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 10 0.98">
      <polygon fill="white" points="0,0.6 0,1 10,1 10,0" />
    </svg>
  </div>
);

export default Nav;
