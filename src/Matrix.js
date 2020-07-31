import React, { Component } from 'react'

export default class Matrix extends Component {
  genRow = vals => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => (
      <div className='row'>{this.genRow(rowVals)}</div>
    ))
  }

  render () {
    return <div id='matrix'>{this.genMatrix()}</div>
  }
}

const generateDefaultPattern = () => {
  let pattern = []
  let row = []
  for (let i = 0; i < 10; i++) {
    row.push('#F00')
  }
  for (let i = 0; i < 10; i++) {
    pattern.push(row)
  }
  return pattern
}

Matrix.defaultProps = { values: generateDefaultPattern() }
