import React from "react"
import { Link } from "gatsby"
import { FaPlusSquare } from "react-icons/fa"


import "./more-button.scss"


export default props => (
	<Link className='more-button' to={props.to}>
		<FaPlusSquare className='more-button__icon'/>
		<h4 className='more-button__heading'>More</h4>
	</Link>
)