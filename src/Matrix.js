import React, { Component } from 'react';
import Cell from "./Cell"

export default class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals)
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    // console.log(this.props.values)
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

Matrix.defaultProps ={
   values: (() => {
     const array =   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
     return (
       new Array(10).fill(array))
   
   })()
}
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.