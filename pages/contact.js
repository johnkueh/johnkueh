import React, { useState } from 'react';
import Layout from '../layouts/main';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <Layout>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
          {loading && (
            <div className="loading w-100 d-flex justify-content-center align-items-center">
              Loading...
            </div>
          )}
          <iframe
            title="Contact form"
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrlvz9QWpffIOZ7v?backgroundColor=green"
            frameBorder="0"
            onLoad={() => setLoading(false)}
            width="100%"
            height="1044"
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
