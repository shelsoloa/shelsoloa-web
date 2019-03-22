import React from "react"
import { Link } from "gatsby"

import Hexagon from "./hexagon"

export default props => (
	<Link to={props.to} style={{ display:'block' }}>
		<Hexagon background={props.background} size='20'/>
	</Link>
)