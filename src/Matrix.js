import React, { Component } from 'react';

export default class Matrix extends Component {

  defRows = () => {
    return this.props.values
  }
  
  genRow = (vals) => {
    console.log(vals)
    return vals.map(val => <div className="cell"></div>) 
    // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: new Array[new Array[10], new Array[10], new Array[10], new Array[10], new Array[10], 
  new Array[10], new Array[10], new Array[10], new Array[10], new Array[10], new Array[10]]
}
