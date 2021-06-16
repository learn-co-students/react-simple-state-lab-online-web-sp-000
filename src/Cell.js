import React, { Component } from 'react';

export default class Cell extends Component {

    // we use the constructor to set the INITIAL STATE 
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    // Our increment method makes use of the 'setState' method, which is what we use to alter state
    setColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.setColor}>
            </div>
        )
    }
}