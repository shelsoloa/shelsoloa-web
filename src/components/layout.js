import React from "react"

import { FaEllipsisH, FaGithub, FaMedium, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "gatsby"

import { HexBackground } from "./hexagon"

import './layout.scss'


export default props => (
	<div class={'page ' + props.class}>
		<HexBackground rows={12} columns={6}/>

		<div class='topbar'></div>
		<div class='bottombar'></div>

		<div class='sidebar'>
			<nav>
				<div class='nav__split'>
					<div class='nav__header'>
						<Link to='/'><h1>Shel<br/>&nbsp;&nbsp;Soloa</h1></Link>
					</div>

					<ul class='nav__links'>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/projects'>Projects</Link></li>
						<li><Link to='/blog'>Blog</Link></li>
						<li><Link to='/about'>About</Link></li>
					</ul>

					<ul class='nav__social'>
						<li><a href='http://twitter.com/_shellbot_'><FaTwitter/></a></li>
						<li><a href='http://github.com/shelsoloa'><FaGithub/></a></li>
						<li><Link to='/about#links'><FaEllipsisH/></Link></li>
					</ul>
				</div>
			</nav>
		</div>

		<content>
			<div class='content__wrapper'>
				<h1 class='content__header'>{props.header}</h1>
				<p class='content__subheader'>{props.subheader}</p>

				<div class='content__inner'>
					{props.children}
				</div>
			</div>
		</content>

		<div class='footer'>
			<div class='inner'>
				<a href='https://twitter.com/_shellbot_'><FaTwitter /></a>
				<a href='https://github.com/shelsoloa'><FaGithub /></a>
				<a href='https://medium.com/@shelsoloa'><FaMedium /></a>
				<a href='https://sshellbot.tumblr.com/'><FaTumblr /></a>
				<a href='https://youtube.com/channel/UCM2oD1gLLENjmHLNURW8JDg'><FaYoutube /></a>
				<p>Thanks for checking my stuff out</p>
			</div>
		</div>
	</div>
)