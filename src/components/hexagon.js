import React from "react"
import "./hexagon.scss"


const ratio = Math.sqrt(3) / 2;

export class Hexagon extends React.Component {
	render() {
		let h;
		let w;

		if (this.props.size !== undefined) {
			h = this.props.size.toString() + 'vw'
			w = (this.props.size * ratio).toString() + 'vw'
		}

		return (
			<div 
				class='hexagon'
				style={{ 'width': w, 'height': h }}
			>
				{this.props.children}
				<div
					class='hexagon__inner'
					style={{ 'background' : this.props.background }}
				>
				</div>
			</div>
		)
	}
}

export class HexBackground extends React.Component {

	createHexes = (rows, columns) => {
		let hexes = [];

		for (var r = 0; r < rows; r++) {
			let column = [];

			for (let c = 0; c < columns; c++) {
				column.push(
					<Hexagon/>
				)
			}

			hexes.push(<div class='hex_container__hex_row'>{column}</div>);
		}	

		return hexes;
	}

	render() {
		return(
			<div class='hex_container'>
				{this.createHexes(this.props.rows, this.props.columns)}
			</div>
		)
	}
}

export default { Hexagon, HexBackground }