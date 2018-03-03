import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        let evens = [];
        let odds = [];
        let arr = this.state.userInput.split(',');

        arr.forEach(item => {
            if (parseInt(item) % 2 === 0) {
                evens.push(parseInt(item));
            } else {
                odds.push(parseInt(item));
            }
        });

        this.setState({
            evenArray: evens, 
            oddArray: odds
            });
            
        }
    
        render() {
            console.log(this.state.evenArray);
            console.log(this.state.evenArray);

        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Events and Odds</h4>
                <input type="text" 
                        className="inputLine"
                        onChange={this.handleInput}
                />
                <button className="confirmationButton" onClick={this.handleClick}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}