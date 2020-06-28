import React, { Component } from 'react';


export default class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    render() {
        return (
          <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>
        
          </div>
        )
      }


      changeColor = () => {
          this.setState({
              color: '#333'
          })
      }

}