import React, {Component} from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = ()=> {
        this.setState({
            color: "#333"
        })
    }

    render() {
        const style = {
            backgroundColor: this.state.color
        }
        return (
            <div className="cell"
            style = {style} 
            onClick={this.handleClick}>
            </div>
        )
    }
}