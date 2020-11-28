import React, { Component } from 'react';

export default class Cell extends Component {

    // set initial state
    constructor(props){
        super()
        this.state = { 
            color: props.value
        }
    }

    // method to alter state
    // event handler! 
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
          <div 
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
          </div>
        )
      }

}