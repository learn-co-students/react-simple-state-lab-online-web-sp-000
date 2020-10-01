import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  // 
  genMatrix = () => {
    // this.props.values
    // console.log('Matrix -> genMatrix -> this.props.values', this.props.values);
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
      const deafaultRow = ['#F00', '#F00', '#F00', '#F00','#F00', '#F00', '#F00', '#F00', '#F00','#F00']
      return(new Array(10).fill(deafaultRow))
    })()
}
