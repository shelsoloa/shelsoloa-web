import React from "react"

import PageTransition from "gatsby-plugin-page-transitions";

import { HexBackground } from "./hexagon"


export default props => (
	<PageTransition>
		<div class={props.class}>
			<HexBackground rows={15} columns={20}/>

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