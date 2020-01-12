import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {color: '#F00'} 
      }

    render(){
        return(
            <div className="cell" style={{backgroundColor: '#F00'}}></div>
        )
    }

}