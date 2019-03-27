import React from "react"

import { Link } from "gatsby"

import PageTransition from "gatsby-plugin-page-transitions";

import { HexBackground } from "./hexagon"


export default props => (
	<PageTransition>
		<div class={props.class}>
			<HexBackground rows={15} columns={20}/>

			<content>
				<div class='content__wrapper'>
					<p class='content__subheader'>{props.subheader}</p>
					<h1 class='content__header'>{props.header}</h1>
					{/* Navigation Links */}
					<nav class='navigation'>
						<Link to='/'>Home</Link>
						<Link to='/projects'>Projects</Link>
						<Link to='/blog'>Blog</Link>
					</nav>

					<div class='content__inner'>
						{props.children}
					</div>
				</div>
			</content>
		</div>
	</PageTransition>
)