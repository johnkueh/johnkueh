import React from 'react';
import Link from 'next/link';
import Layout from '../layouts/main';

export default () => (
  <Layout>
    <h1>Works</h1>
    <div>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  </Layout>
);
