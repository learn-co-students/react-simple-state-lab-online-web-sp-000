import React from 'react'

class Cell extends React.Component {
    constructor(props){
        super()
        this.state = {  //state! each cell keep track of single state value color, grey #FFF
            color: props.value //set to the value of prop, passed from parent component
        }
    } 

    changeColor = () => {
        const newColor = '#333'
        this.setState({
            color:newColor
        })
    }


    render(){
        return (                                        //click listener, when activated, updates the state of the square to the grey value 
            <div className="cell" style={{backgroundColor:this.state.color}} onClick={this.changeColor}></div>
        )
    }
}

export default Cell 