import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {
  
  //maps through the values 
  genRow = (vals) => {
    console.log(vals)
    return vals.map(val => 
      <div className="cell">
        <Cell value={val} />
      </div>) // replace me and render a cell component instead!
  }
  
  //instance method in which every row creates a div calling genRow
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
  values: (() => {
    const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(row))
  })()
}

