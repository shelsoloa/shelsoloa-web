import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { ProjectsSection, ProjectPreview } from '../components/project-components';

import '../styles/projects.scss';

const ProjectsPage = ({ data }) => (
  <Layout class="projects-page" header="Projects" subheader="noteworthy projects developed throughout the years">
    <ProjectsSection>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectPreview
          title={node.frontmatter.title}
          description={node.frontmatter.subtitle}
          image={node.frontmatter.preview_image.publicURL}
          image_alt={node.frontmatter.title + ' preview image'}
          to={node.fields.slug}
        />
      ))}
    </ProjectsSection>
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
