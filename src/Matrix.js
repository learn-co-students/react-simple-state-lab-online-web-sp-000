import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
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
  values: (() =>{

    const row = Array(10).map(object => object)
    row.fill('#F00')
    const table = Array(10)
    table.fill(row)
    return (table)
    // const row = Array(10)
    // row.fill('#F00', 0, 9)
    // return Array(10).fill(row)
  })()
  // '#F00'
}