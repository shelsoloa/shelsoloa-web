import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

import './blog-post.scss';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout class="post-page">
      <div class="post">
        <h1 class="post__title">{post.frontmatter.title}</h1>
        <p class="post__date">{post.frontmatter.date}</p>
        <ul class="post__tags">
          {post.frontmatter.tags.map(tag => (
            <li>
              <Link to="/">{tag}</Link>
            </li>
          ))}
        </ul>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};
export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM DD YYYY")
        tags
      }
    }
  }
`;
