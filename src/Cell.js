import React, { Component } from "react";

export default class Cell extends Component {
  state = {
    color: this.props.value
  };

  handleclick = () => {
    this.setState({
      color: "#333"
    });
  };
  render() {
    return (
      <div
        className="cell"
        onClick={this.handleclick}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
