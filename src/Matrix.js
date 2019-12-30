import React, { Component } from 'react';

export default class Matrix extends Component {

  // this.props.values ===> array of arrays
  // this.props.values = [
  //                       [a, b, c],
  //                       [a, b, c]
  //                     ]


  genRow = (vals) => (
    // vals = ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
    vals.map(val => <div className="cell"></div>)
    // replace me and render a cell component instead!
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
