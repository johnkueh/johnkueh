import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/index.scss';

const Main = ({ children }) => (
  <>
    <div className="py-5">
      <Head>
        <title>John Kueh - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="container">{children}</div>
    </div>
  </>
);

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired
};
