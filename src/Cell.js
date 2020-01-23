import React, { Component } from 'react';
import Matrix from './Matrix';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
        <div
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.changeColor}
            // onClick={() => this.setState({ color: '#333'})}
            >
        </div>
        )
    }
}
