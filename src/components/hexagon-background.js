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

			hexes.push(<div className={styling.hex_container__hex_row}>{column}</div>);
		}	

		return hexes;
	}

	render() {
		return(
			<div className={styling.hex_container}>
				{this.createHexes(this.props.rows, this.props.columns)}
			</div>
		)
	}
}