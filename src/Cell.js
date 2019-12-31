import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }
    
    updateColor = () =>{
        this.setState({
            color: '#333'
        })
    }
    render(){
        return (
            <div className="cell" onClick={this.updateColor} style={{backgroundColor: this.state.color}}>
            </div>
        )
    }


}