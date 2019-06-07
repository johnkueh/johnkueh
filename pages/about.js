import React from 'react';
import Layout from '../layouts/main';
import Content from '../content/about.mdx';

export default () => (
  <Layout>
    <div className="row d-flex justify-content-center">
      <div className="col-md-8">
        <Content />
      </div>
    </div>
  </Layout>
);
