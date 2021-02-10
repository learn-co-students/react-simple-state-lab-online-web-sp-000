import React, {Component} from 'react';
export default class Cell extends Component {

    constructor(props) {
          super()
          this.state = {
              color: props.value
          }
    }
    handlesClick = (event) => {
        console.log(this)
        this.setState({
            color:'#333'
        })
        console.log(this)
        console.log("hi")

    }
    
    render () {
        return(
        <div className="cell" style={{backgroundColor: this.state.color}}
             onClick={this.handlesClick}>
        </div>
        )
    }













}