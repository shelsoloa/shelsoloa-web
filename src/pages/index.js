import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import '../styles/index.scss';
import logo from '../data/img/img_shelsoloa__logo--transparent.png'

const IndexPage = ({ data }) => (
  <Layout class="index-page center" header="" subheader="">
    <img src={logo} />
    <p><a href='mailto:shel@shelsoloa.com'>shel@shelsoloa.com</a></p>
  </Layout>
);
export default IndexPage;

export const query = graphql`
  query IndexQuery {
    featuredProject: markdownRemark(frontmatter: { tags: { in: "featured" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        subtitle
        preview_image {
          publicURL
        }
        tags
      }
    }

    mostRecentPost: markdownRemark(frontmatter: { tags: { in: "latest" } }) {
      excerpt(pruneLength: 1000)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY")
      }
      html
    }
  }
`;
