import React, { Component } from 'react';

class Sum extends Component {
    constructor () {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    computeSum() {
        const {number1, number2} = this.state
        const sum = (number1/ 1) + (number2/ 1);
        this.setState({ sum })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.setState({number1: e.target.value})}/>
                <input className="inputLine" onChange={e => this.setState({number2: e.target.value})}/>                
                <button className="confirmationButton" onClick={() => this.computeSum()}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>  
            </div>
        );
    }
}

export default Sum