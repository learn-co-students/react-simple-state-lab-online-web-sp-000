import React, { Component } from 'react';
//import Matrix from './Matrix'  WRONG; Matrix is the parent. Cell is the child. Therefore Matrix receives Cell, rather than vice cersa.  The CHILD gets imported into the PARENT.

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {color: props.value} // ...define initial state with a key of 'color' set to the 'value' prop
  }

  handleClick = () => {
//debugger;
    this.setState({color: '#333'})
//debugger;
  }

  render() {
    return (
      <div
        className='cell'
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>

    )
  }

}


// style={{backgroundColor: '#FFF'}}
