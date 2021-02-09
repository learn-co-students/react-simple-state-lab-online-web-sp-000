import React, {Component} from 'react';

export default class Cell extends Component {

    constructor(props) {
        console.log(props.value)
        super()
        this.state = {
          color: props.value
        }
      }

    handleClick = (event) => {
        console.log(this.props)
        const newColor = (this.state.color === '#333' ? this.props.value : '#333')
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div 
            className = 'cell'
            style ={{backgroundColor: this.state.color}}
            onClick = {this.handleClick}
            >
            </div>
        )
    }
}