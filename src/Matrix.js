import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals, i) => {
    return vals.map(val => <Cell value={val} key={i}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals, i) => {
      // debugger
      return <div className="row" key={i.toString()}>{this.genRow(rowVals)}</div>
    })
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
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
