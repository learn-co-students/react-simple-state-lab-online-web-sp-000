import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        // console.log(props.value);
        this.state={
            color: props.value
        };
    }

    handleClick = (event) => {
        console.log('This is clicked')
        this.setState({
            color: '#333'
        })
        console.log('updated color')
    }

    // setState = (event) => {
    //     console.log('Set State')
    //     this.setState
    // }


    render() {
        return (
            <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
            </div>
        );
    }
    
}