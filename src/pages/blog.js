import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { PostPreview } from '../components/post-components';

import '../styles/blog.scss';

const Blog = ({ data }) => (
  <Layout class="blog-page" header="Blog Entries" subheader="">
  </Layout>
);
export default Blog;

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/blog/" } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
          }
        }
      }
    }
  }
`;
