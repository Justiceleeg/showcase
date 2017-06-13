import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
                ],
            userInput: "",
            filteredArray: []
        }
    }

    filterTheObject (prop) {
        const {unFilteredArray} = this.state;
        let filteredArray = [];
        unFilteredArray.forEach( currVal => {
            if(currVal.hasOwnProperty(prop)){
                filteredArray.push(currVal)
            }
        })
        this.setState({ filteredArray })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ e => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.filterTheObject(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject