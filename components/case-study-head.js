import React from 'react';
import Head from 'next/head';

const CaseStudyHead = ({ title, caption }) => (
  <div className="mb-md-5">
    <Head>
      <title>
        John Kueh - Case study:&nbsp;
        {title}
      </title>
    </Head>
    <h1>{title}</h1>
    <p>{caption}</p>
  </div>
);

export default CaseStudyHead;
