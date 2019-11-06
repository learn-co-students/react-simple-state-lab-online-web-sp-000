import React, { Component } from 'react';
import Cell from './Cell.js'

class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    console.log(this.genMatrix())
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

export default Matrix; 

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
