import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Color from 'color';
import fetch from 'isomorphic-unfetch';
import Stroke from '../components/stroke';
import NavLink from '../components/nav-link';
import Footer from '../components/footer';
import Blob from '../components/blob';
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

const CaseStudy = ({ title, caption, color, tech, servicesUsed, children }) => (
  <>
    <Head>
      <title>
        John Kueh - Case study:&nbsp;
        {title}
      </title>
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
      <div className="container">
        <div className="mb-5">
          <h1>{title}</h1>
          <p className="mb-1">{caption}</p>
          <span className="stroke">
            <Stroke color={color} />
          </span>
        </div>
        <div className="row">
          <div className="order-md-1 col-md-4">
            <div>
              <h5>Technology stack</h5>
              {tech.map(tag => (
                <Tag key={tag} color={color} tag={tag} />
              ))}
            </div>
            <div className="mt-5">
              <h5>Services used</h5>
              {servicesUsed.map(tag => (
                <Tag key={tag} color={color} tag={tag} />
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className="mt-5 mt-md-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>
      {`
        .tags {
        }
      `}
    </style>
  </>
);

const Tag = ({ tag, color }) => {
  return (
    <>
      {Array.isArray(tag) ? (
        <a target="_new" href={tag[1]}>
          <span className="tag">{tag[0]}</span>
        </a>
      ) : (
        <span className="tag">{tag}</span>
      )}
      <style jsx>
        {`
          .tag {
            display: inline-block;
            margin: 8px 8px 0 0;
            background-color: ${Color(color)
              .alpha(0.2)
              .rgb()
              .string()};
            padding: 5px 8px;
            border-radius: 3px;
            color: ${Color(color)
              .darken(0.5)
              .rgb()
              .string()};
          }
          a .tag:hover {
            background-color: ${Color(color)
              .alpha(0.4)
              .rgb()
              .string()};
          }
        `}
      </style>
    </>
  );
};

export const withLayout = meta => props => <CaseStudy {...meta} {...props} />;

export default CaseStudy;

CaseStudy.propTypes = {
  children: PropTypes.node.isRequired,
  tech: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  servicesUsed: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

CaseStudy.defaultProps = {
  tech: [],
  servicesUsed: []
};
