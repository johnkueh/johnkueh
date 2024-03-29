import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../layouts/main';
import Stroke from '../components/stroke';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <Layout>
      <Head>
        <title>John Kueh - Get in touch</title>
      </Head>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
          {loading && (
            <div className="loading w-100 d-flex justify-content-center align-items-center">
              <h2 className="d-flex flex-column align-items-center mb-5">
                <span>Loading...</span>
                <span className="stroke">
                  <Stroke color="#ffb400" />
                </span>
              </h2>
            </div>
          )}
          <iframe
            title="Contact form"
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrlvz9QWpffIOZ7v?backgroundColor=green"
            frameBorder="0"
            onLoad={() => setLoading(false)}
            onWheel={() => {}}
            width="100%"
            height="1200"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .loading {
            height: 300px;
          }
        `}
      </style>
    </Layout>
  );
};
