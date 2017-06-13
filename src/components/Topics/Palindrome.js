import React, { Component } from 'react';

class Palindrome extends Component {
    constructor () {
        super()

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    palindromeCheck(){
        const { userInput } = this.state
        const palindrome = (userInput === userInput.split("").reverse().join("")) ? "true" : "false"

        this.setState({ palindrome })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.setState({userInput: e.target.value})} />
                <button className="confirmationButton" onClick={() => this.palindromeCheck()}>Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>  
            </div>
        );
    }
}

export default Palindrome