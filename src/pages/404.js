import React from 'react';

import Layout from '../components/layout';

const Error404Page = () => (
  <Layout header="Woops" subheader="Looks like we ran into an error">
    <br />
    <h1>404 - Page Not Found</h1>
    <p>
      &nbsp;&nbsp;The page you requested could not be found. If you think this is a technical error then message me at{' '}
      <a href="mailto:contact@shelsoloa">contact@shelsoloa.com</a>, and I'll have this fixed as soon as possible.
      <br />
      <br />
      Thanks!
      <br />
      &nbsp;&nbsp;~ Shel
    </p>
  </Layout>
);
export default Error404Page;
