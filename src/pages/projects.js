import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { ProjectsSection, ProjectPreview } from '../components/project-components';

import '../styles/projects.scss';

const ProjectsPage = ({ data }) => (
  <Layout class="projects-page" header="Projects" subheader="">
  </Layout>
);
export default ProjectsPage;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }, sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            preview_image {
              publicURL
            }
            date(formatString: "YYYY")
            tags
          }
        }
      }
    }
  }
`;
