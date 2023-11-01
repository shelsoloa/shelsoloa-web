import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import '../styles/about.scss';
import headshot from '../data/img/img_self.jpg';

const AboutPage = ({ data }) => (
  <Layout class="about-page" header="About">
  </Layout>
);
export default AboutPage;

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/pages/about-writeup.md/" }) {
      html
    }
  }
`;
