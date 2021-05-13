import React, { Component } from 'react';

export default class Cell extends Component {

	constructor(props){
		super()
		this.state = {
			color: props.value // this is the value that's been passed down via props from it's parent: Matrix
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