import React, { Component } from "react";
import { defaultArray } from "./default";
import Cell from "./Cell";
export default class Matrix extends Component {
  static defaultProps = {
    values: defaultArray
  };
  genRow = vals => vals.map(val => <Cell value={val}></Cell>);

  genMatrix = () =>
    this.props.values.map(rowVals => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}
