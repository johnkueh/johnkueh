import React from 'react';
import Head from 'next/head';
import Layout from '../layouts/main';
import Content from '../content/about.mdx';

export default () => (
  <Layout>
    <Head>
      <title>John Kueh - About</title>
    </Head>
    <div className="row d-flex justify-content-center">
      <div className="col-md-8">
        <div className="py-3 text-center text-md-left">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div>
              <h1>About me</h1>
              <p>React, GraphQL and design.</p>
            </div>
            <div className="my-3">
              <a
                className="btn btn-primary"
                href="https://www.dropbox.com/s/fa0euow3bfkxdii/John%20Kueh%20-%20CV2019.pdf?dl=1"
              >
                Download resume &nbsp;
                <span aria-label="finger" role="img">
                  👉
                </span>
              </a>
            </div>
          </div>
          <img
            width="80"
            className="my-3 rounded-circle"
            src="/static/images/headshot.jpg"
            alt="Headshot"
          />
        </div>
        <Content />
      </div>
    </div>
  </Layout>
);
