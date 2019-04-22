import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { FaEllipsisH, FaGithub, FaMedium, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa"
import { Helmet } from "react-helmet"

import { HexBackground } from "./hexagon"

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

				<HexBackground rows={12} columns={6}/>

				<div class='topbar'></div>
				<div class='bottombar'></div>

				<div class='sidebar'>
					<nav>
						<div class='nav__split'>
							<div class='nav__header'>
								<Link to='/'><h1>Shel<span class='between'><br/>&nbsp;&nbsp;</span>Soloa</h1></Link>
							</div>

							<ul class='nav__links'>
								<li><Link to='/'>Home</Link></li>
								<li><Link to='/projects'>Projects</Link></li>
								<li><Link to='/blog'>Blog</Link></li>
								<li><Link to='/about'>About</Link></li>
							</ul>

							<ul class='nav__social'>
								<li><a href={'http://twitter.com/' + data.site.siteMetadata.social.twitter}><FaTwitter/></a></li>
								<li><a href={'http://github.com/' + data.site.siteMetadata.social.github}><FaGithub/></a></li>
								<li><a href={'http://medium.com/' + data.site.siteMetadata.social.medium}><FaMedium/></a></li>
							</ul>
						</div>
					</nav>
				</div>

				<content>
					<div class='content__wrapper'>
						<h1 class='content__header'>{props.header}</h1>
						<p class='highlight content__subheader'>{props.subheader}</p>

						<div class='content__inner'>
							{props.children}
						</div>
					</div>
				</content>

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
			</div>
		)}
	/>
)