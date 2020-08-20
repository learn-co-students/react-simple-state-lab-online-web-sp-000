import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        console.log(props.value)
        super()
        this.state = {color: props.value}
    }
    updateColor = () => { 
        this.setState({color: '#333'})
    }

    render() {
        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.updateColor}></div>
        )
    }
}