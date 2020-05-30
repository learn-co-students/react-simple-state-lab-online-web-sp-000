import React, { Component } from "react";

export default class Cell extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: this.props.value
		}
	}

	handleClick = (event) => {
		// toggleColor()
		console.log("handling click")
		this.setState({
			color: '#333'
		})
	}

	render() {
		return <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}></div>
	}
}