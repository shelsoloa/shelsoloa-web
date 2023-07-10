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

        <div class="sidebar">
          <div class="sidebar__wrapper">
            <div class="sidebar__image">
              <img alt="Shel Soloa" description="the shellbot logo" src={logo} />
            </div>

            <hr />

            <nav>
              <ul class="nav__links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Articles</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>

              <ul class="nav__social">
                <li>
                  <a aria-label="twitter link" href={'http://twitter.com/' + data.site.siteMetadata.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a aria-label="github link" href={'http://github.com/' + data.site.siteMetadata.social.github}>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a aria-label="medium link" href={'http://medium.com/' + data.site.siteMetadata.social.medium}>
                    <FaMedium />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

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
