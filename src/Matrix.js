import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

const defaultValues = [];
for(let r = 0; r < 10; r++) {
  const row = [];
  for(let c = 0; c < 10; c++) {
    row.push("#F00");
  }
  defaultValues.push(row);
}

Matrix.defaultProps = {
  values: defaultValues
}
