import React, { Component }  from 'react';

export default class Cell extends Component {

  constructor(props) {
    // props is an object that is used to pass in data when initializing a component usually in react
    // this will be called everytime a new instance of the component is created.
    super()
    this.state = {color:props.value} // ...define initial state with a key of 'color' set to the 'value' prop
  }

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
