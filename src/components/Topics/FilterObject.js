import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{"name": "Jimmy Joe", "title": "HackOr", "age":12}, 
                                {"name": "Harry Potter", "title": "Whitch", "age":13, "hairColor":"black"}],
            userInput: '',
            filteredArray: []
        }
    }

    handleClick() {
        let array = this.state.unFilteredArray.slice(0);
        let str = this.state.userInput;
        let filteredArray = array.filter(item => item[str]);
        this.setState({filteredArray});
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input type="text" 
                        className="inputLine"
                        onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button className="confirmationButton"
                        onClick={() => {this.handleClick()}}
                
                >Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}