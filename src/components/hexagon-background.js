import React from "react"

import styling from "./hexagon.module.scss"
import Hexagon from './hexagon'


export default class HexBackground extends React.Component {

	createHexes = (rows, columns) => {
		let hexes = [];

		for (var r = 0; r < rows; r++) {
			let column = [];

			for (let c = 0; c < columns; c++) {
				column.push(
					<Hexagon/>
				)
			}

			hexes.push(<div className={styling.hexcontainer__hexrow}>{column}</div>);
		}	

		return hexes;
	}

	render() {
		return(
			<div className={styling.hexcontainer}>
				{this.createHexes(this.props.rows, this.props.columns)}
			</div>
		)
	}
}