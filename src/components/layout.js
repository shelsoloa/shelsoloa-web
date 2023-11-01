import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FaGithub, FaMedium, FaTwitter } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

import logo from '../data/img/img_shelsoloa__logo--transparent.png';

import './layout.scss';

const Layout = props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
            }
            social {
              github
              medium
              tumblr
              twitter
              youtube
            }
          }
        }
      }
    `}
    render={data => (
      <div class={'page ' + props.class}>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta charset="utf-8" />
          <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>

        <content>
          <div class="content__wrapper">
            <h1 class="content__header">{props.header}</h1>
            <p class="highlight content__subheader">{props.subheader}</p>

            <div class="content__inner">{props.children}</div>
          </div>
        </content>
      </div>
    )}
  />
);

export default Layout;
