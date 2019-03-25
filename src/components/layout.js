import React from "react"
import { HexBackground } from "./hexagon"


export default props => (
	<div className='layout'>
		<HexBackground rows={15} columns={20}/>

		<content>
			<div class='content__wrapper'>
				<h1 class='content__header'>{props.header}</h1>
				<p class='content__subheader'>{props.subheader}</p>
				{props.children}
			</div>
		</content>
	</div>
)