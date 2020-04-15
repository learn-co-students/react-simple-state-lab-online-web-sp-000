import React, { Component } from 'react';

export default class Cell extends Component {
    
    constructor(props) {
        super()
        this.state = {
          color: props.value
        }
    }
     
      // our increment method makes use of the 'setState' method, which is what we use to alter state
      handleClick = () => {
        this.setState({
          color: '#333'
        })
      }
     
      render() {
        return (
        <div 
            className="cell"
            style={{backgroundColor: this.state.color}} 
            onClick={this.handleClick}>
        </div>  
        )
      }


}

//return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
 