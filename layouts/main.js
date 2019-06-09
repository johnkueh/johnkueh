import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import fetch from 'isomorphic-unfetch';
import NavLink from '../components/nav-link';
import Footer from '../components/footer';
import 'nprogress/nprogress.css';
import '../styles/index.scss';

Router.events.on('routeChangeStart', url => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

if (!process.browser) {
  global.fetch = fetch;
}

const Main = ({ children }) => (
  <>
    <Head>
      <title>John Kueh - Software Engineer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script
        defer
        src="https://pro.fontawesome.com/releases/v5.8.1/js/all.js"
        integrity="sha384-GBwm0s/0wYcqnK/JmrCoRqWYIWzFiGEucsfFqkB76Ouii5+d4R31vWHPQtfhv55b"
        crossOrigin="anonymous"
      />
    </Head>
    <div className="py-2">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center justify-content-md-between">
          <div className="d-flex pt-3 pt-md-0 align-items-center">
            <NavLink href="/">
              <a href="/">
                <div className="d-flex align-items-center">
                  <div className="mr-3">
                    <img alt="jigsaw" width="40" src="/static/images/jigsaw.svg" />
                  </div>
                </div>
              </a>
            </NavLink>
          </div>
          <div>
            <ul className="nav-links">
              <NavLink href="/">
                <a href="/" className="nav-link p-3">
                  Portfolio
                </a>
              </NavLink>
              <NavLink href="/about">
                <a href="/about" className="nav-link p-3">
                  About
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
      </div>
    </div>

    <div className="bg-white py-3 py-md-5">
      <div className="container">{children}</div>
    </div>
    <Footer />
  </>
);

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired
};
