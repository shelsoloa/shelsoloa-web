import React from "react"

import { Link } from "gatsby"

import PageTransition from "gatsby-plugin-page-transitions";

import { HexBackground } from "./hexagon"


export default props => (
	<PageTransition>
		<div class={'page ' + props.class}>
			<HexBackground rows={15} columns={20}/>

			<div class='sidebar'>
				<nav>
					<img class='pic' src="https://placeimg.com/300/300/any"/>

						{/* Navigation Links */}
						<ul class='navigation-links'>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/projects'>Projects</Link></li>
							<li><Link to='/blog'>Blog</Link></li>
						</ul>
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