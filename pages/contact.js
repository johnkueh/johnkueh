import React from 'react';
import Layout from '../layouts/main';

export default () => (
  <Layout>
    <div className="row d-flex justify-content-center">
      <div className="col-md-8">
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
        <iframe
          title="Contact form"
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrlvz9QWpffIOZ7v?backgroundColor=green"
          frameBorder="0"
          onMouseWheel=""
          width="100%"
          height="1044"
          style={{ background: 'transparent' }}
        />
      </div>
    </div>
  </Layout>
);
