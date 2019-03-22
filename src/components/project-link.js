import React from "react"
import { Link } from "gatsby"

import Hexagon from "./hexagon"

export default props => (
	<div>
		
		<Link to={props.to} style={{ display:'block'}}>
			<Hexagon background={props.background} size='20'/>
		</Link>
		<Link to={props.to}>
			<h2 style={{ 'text-align': 'center', padding: 0, 'margin': 0 }}>
				{props.label}
			</h2>
		</Link>
		
	</div>
)