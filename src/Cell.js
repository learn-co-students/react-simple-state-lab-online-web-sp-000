import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = { 
            color: props.value
        }
    }

    grey = () => {
        const grey = '#333'
        this.setState({
            color: grey
        })
    }
    render() {
        let color = this.state.color
        return (
            <div className="cell" 
            style={{backgroundColor: color}}
            onClick={this.grey}
            ></div>
        )
    }
}