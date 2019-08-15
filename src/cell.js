import React, { Component } from 'react';

export default class Cell extends Component {
    constructor (props){
        super(props);
        this.state = {
            color: props.color
        }
    }

    handleOnClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleOnClick}></div>
            
        
        )
    }
}

// export default Cell;

