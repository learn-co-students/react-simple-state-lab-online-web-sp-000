import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    handleClick = (e) => {
        this.setState({color: '#333'})
    }

    render() {
        return <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}></div>
    }
}

export default Cell