import React, { Component } from 'react';

export default class Cell extends Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = {
        color: props.value
      }
    }

    change = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
      }    
   
    render() {
        console.log(this.props.color)
        return (
            <div onClick={this.change} className="cell" style={{backgroundColor: this.state.color}}>

            </div>
        )
      }    
  }