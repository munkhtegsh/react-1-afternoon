import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        });
    }
    
    sum() {
        let sum = this.state.number1 + this.state.number2;
        this.setState({sum})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" name="number1" className="inputLine"
                        onChange={(e) => this.handleInput(e)}
                        />
                <input type="number" name="number2" className="inputLine"
                        onChange={(e) => this.handleInput(e)}
                        />
                <button className="confirmationButton" onClick={() => this.sum()}>Calculate</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}