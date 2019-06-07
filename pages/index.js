import React from 'react';
import Link from 'next/link';
import Layout from '../layouts/main';

export default () => (
  <Layout>
    <h1>Welcome</h1>
    <div>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </div>
  </Layout>
);
