import React from 'react'
import ReactDOM from 'react-dom'
import { pattern1 } from './data.js'
import './index.css'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'))
