import React, { Component } from 'react';
import Cell from './cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals)
    // vals is one array with 10 colors

    // cell is a component from cell.js, when the div is created it is adding the color to the div
    // <Cell value={val} />

    return vals.map(val => <div className="cell"> <Cell value={val}/> </div>) // replace me and render a cell component instead!
  }
  
  // genMatrix is an instance method
  genMatrix = () => 
  {
    // console.log(this.props.values)
    // this.props.value is an array of 10 arrays with 10 colors within each array
    return this.props.values.map(rowVals => <div className="row"> {this.genRow(rowVals)} </div>)
    
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
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}