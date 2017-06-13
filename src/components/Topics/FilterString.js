import React, { Component } from 'react';

class FilterString extends Component {
    constructor () {
        super()

        this.state = {
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Blake", "Maddy"],
            userInput: "",
            filteredArray: []
        }
    }

    filterTheString(filt){
        let filteredArray = this.state.unFilteredArray.filter(v => v.includes(filt))
        this.setState({ filteredArray })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.filterTheString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString