import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    assignEvensAndOdds() {
        let { userInput } = this.state;
        let array = userInput.split(',')
        let evenArr = [], oddArr = [];
        array.map( v => (parseInt(v, 0) % 2 === 0) ? evenArr.push(parseInt(v, 0)) : oddArr.push(parseInt(v, 0)))
        evenArr = evenArr.sort((a,b) => a-b);
        oddArr = oddArr.sort((a,b) => a-b);       
        this.setState({
            evenArray: evenArr,
            oddArray: oddArr
        });
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" value={this.state.userInput} onChange={(e) => this.setState({userInput: e.target.value})} />
                <button className="confirmationButton" onClick={() => this.assignEvensAndOdds()}> Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>                
            </div>
        );
    }
}

export default EvenAndOdd