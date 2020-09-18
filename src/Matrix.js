import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map((val, i) => < 
      Cell key={i} value={val}/>)
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const patternArray = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
const newPatternArray = []
for(let i=0; i< patternArray.length; i++){
  newPatternArray.push(patternArray)
}

Matrix.defaultProps = {
  values: newPatternArray
}