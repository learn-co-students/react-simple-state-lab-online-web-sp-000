import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        // ...define initial state with a key of 'color' set to the 'value' prop
        this.state = {
            color: this.props.value
        }
    }
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }
    
    render(){
        return (
            <div className="cell" onClick = {this.handleClick} style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}