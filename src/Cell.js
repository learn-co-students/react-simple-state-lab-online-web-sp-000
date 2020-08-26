import React, { Component } from 'react';

export default class Cell extends Component {
  
    constructor(value) {
        super()
        this.state = {
            color: value
        } // ...define initial state with a key of 'color' set to the 'value' prop
      }
  
  newColor = () => {
    console.log('newColor')
    const newColor = '#333'
    this.setState({
        color: newColor
    })
  }
  
  render() {
    return (
        
      <div className="cell" onClick={this.newColor} style={{backgroundColor: `${this.state.color}`}}>
      {console.log('rendering Cell', this.state.color)}
      </div>
    )
  }
  
}