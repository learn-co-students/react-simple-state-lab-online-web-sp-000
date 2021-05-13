import { Component } from "react";
import React from 'react';

export default class Cell extends Component{
    constructor(value){
        super()
        this.state = {
            color: value.value
        }
    }
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }
    render(){
        return <div className= "cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
    }
}