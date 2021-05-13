import React, { Component } from 'react';

export default class Cell extends Component {

	constructor(props){
		console.log(props)
		super()
		this.state = {
			color: props.value
		}
	}

	updateColor = () => {
		this.setState({
			color: "#333"
		})
	}

	render(){
		return(
	      <div onClick={this.updateColor} className="cell" style={{backgroundColor: this.state.color}}>
	      </div>

		)
	}
}