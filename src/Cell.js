import React, { Component } from 'react';
import { runInThisContext } from 'vm';

export default class Cell extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          color: this.props.value
        }
    }


    click = () => {
        this.setState({
            color: '#333'
        })
    }


    render(){


        return (
            <div 
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.click}
            >

            </div>

        )
    }



}