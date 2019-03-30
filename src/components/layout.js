import React from "react"

import { Link } from "gatsby"

import PageTransition from "gatsby-plugin-page-transitions";

import { HexBackground } from "./hexagon"


export default props => (
	<PageTransition>
		<div class={'page ' + props.class}>
			<HexBackground rows={12} columns={8}/>

			<div class='sidebar'>
				<nav>
					<div class='nav__split'>
						<div class='nav__header'>
							<Link to='/'><h1>Shel<br/>Soloa</h1></Link>
						</div>
						<div class='nav__subheader'><p>developer</p></div>

						<ul class='nav__links'>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/projects'>Projects</Link></li>
							<li><Link to='/blog'>Blog</Link></li>
							<li><Link to='/about'>About</Link></li>
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
		</div>
	</PageTransition>
)