import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {

	genRow = (vals, idx) => (
		vals.map((val, i) => <Cell key={idx.toString().concat(i.toString())} value={val} />)
	);

	genMatrix = () => (
		this.props.values.map((rowVals, i) => <div key={i.toString()} className="row">{this.genRow(rowVals, i)}</div>)
	);
	
	render() {
		return (
			<div id="matrix">
				{this.genMatrix()}
			</div>
		);
	};

}

Matrix.defaultProps = {
	values: [
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
		["#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00", "#F00"],
	]
}
