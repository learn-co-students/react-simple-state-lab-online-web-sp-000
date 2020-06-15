import React, { Component } from 'react';
import { defaultPattern } from './data.js';
import Cell from './Cell';

export default class Matrix extends Component {

  genRow = (vals) => {
    console.log(vals);
    return vals.map(val => <Cell value={val} />)
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

// TODO: define defaultProps
Matrix.defaultProps = {
  values: defaultPattern
}
