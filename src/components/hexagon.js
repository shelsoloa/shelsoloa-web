import React from "react"
import styling from "./hexagon.module.scss"


const ratio = Math.sqrt(3) / 2;

export default class Hexagon extends React.Component {
	render() {
		let h;
		let w;

		if (this.props.size !== undefined) {
			h = this.props.size.toString() + 'vw'
			w = (this.props.size * ratio).toString() + 'vw'
		}

		return (
			<div 
				className={styling.hexagon}
				style={{ 'width': w, 'height': h }}
			>
				<div
					className={styling.hexagon__inner}
					style={{ 'background' : this.props.background }}
				>
				</div>
			</div>
		)
	}
}