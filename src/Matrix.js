//generates html of div cells 
//10x10 array making 10 rows w 10 values 

import React, { Component } from 'react';
import Cell from './Cell.js'


export default class Matrix extends Component {
  
  //every row will map through vals to create an array of div cells
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} /> ) // replace me and render a cell component instead!
  }
  
  //every row in this.props.values will create a div row
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
//what our matrix component looks like 
// gen matrix instance method that maps this.props.values
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()} 
      </div>
    )
  }
  
}

//default values prop for Matrix, 10x10 array 
Matrix.defaultProps = {
  values:[['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], 
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']]
} 