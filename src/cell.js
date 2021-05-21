import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = { color: props.value }
    }

    handleClick = () => {
        this.setState({color: '#333'})

        // Better functionality to switch back and load from original prop value
        // this.state.color !== '#333' ?
        //     this.setState({color: '#333'}) : this.setState({ color: this.props.value})
    }

    render() {
        return (
            <div
                className='cell'
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}
            />
        )
    }
}