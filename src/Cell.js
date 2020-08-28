import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
      super()
      this.state = this.props.value
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: '#FFF'}}>
        onClick={this.state = '#333'}
      </div>
    )
  }


  
}
