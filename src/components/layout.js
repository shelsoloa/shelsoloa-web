import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { FaGithub, FaMedium, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa"
import { Helmet } from "react-helmet"

import portrait from "../data/img/img_shelsoloa__portrait.png"

import './layout.scss'


export default props => (
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
					<meta charset="utf-8"/>
					<meta name='description' content={data.site.siteMetadata.description}/>
				</Helmet>

				<div class='topbar'><a href="mailto:inquiry@shelsoloa.com">Currently available for contract work</a></div>

				<div class='sidebar'>

					<div class='sidebar__wrapper'>
						<div class='sidebar__portrait'>
							<img alt="Shel Soloa" description='My portrait' src={portrait}/>
						</div>

						<nav>
							<ul class='nav__links'>
								<li class='current-section'><Link to='/'>Home</Link></li>
								<li><Link to='/blog'>Articles</Link></li>
								<li><Link to='/projects'>Projects</Link></li>
								<li><Link to='/about'>About</Link></li>
							</ul>

							<ul class='nav__social'>
								<li><a href={'http://twitter.com/' + data.site.siteMetadata.social.twitter}><FaTwitter/></a></li>
								<li><a href={'http://github.com/' + data.site.siteMetadata.social.github}><FaGithub/></a></li>
								<li><a href={'http://medium.com/' + data.site.siteMetadata.social.medium}><FaMedium/></a></li>
							</ul>
						</nav>
					</div>
				</div>

				<content>
					<div class='content__wrapper'>
						<h1 class='content__header'>{props.header}</h1>
						<p class='highlight content__subheader'>{props.subheader}</p>

						<div class='content__inner'>
							{props.children}
						</div>
					</div>

					<div class='footer'>
						<div class='inner'>
							<a className='highlight' href={'https://twitter.com/' + data.site.siteMetadata.social.twitter}><FaTwitter /></a>
							<a className='highlight' href={'https://github.com/' + data.site.siteMetadata.social.github}><FaGithub /></a>
							<a className='highlight' href={'https://medium.com/' + data.site.siteMetadata.social.medium}><FaMedium /></a>
							<a className='highlight' href={'https://' + data.site.siteMetadata.social.tumblr + '.tumblr.com'}><FaTumblr /></a>
							<a className='highlight' href={'https://youtube.com/channel/' + data.site.siteMetadata.social.youtube}><FaYoutube /></a>
							<p>Thanks for checking my stuff out</p>
						</div>
					</div>
				</content>
			</div>
		)}
	/>
)