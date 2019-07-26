import React from 'react';

export default class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: props.value};
  }

  toggle = () => {
    this.setState({color: "#333"});
  }

  render(){
    return(
      <div style={{backgroundColor: this.state.color}} className="cell" onClick={this.toggle}></div>
    );
  }
}