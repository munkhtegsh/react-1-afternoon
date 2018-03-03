import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    handleClick() {
        let reversed = this.state.userInput.split('').reverse().join('');
        if (this.state.userInput === reversed) {
            this.setState({palindrome: true});
        } else {
            this.setState({palindrome: false})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" 
                    className="inputLine" 
                    onChange={(e) => this.setState({userInput: e.target.value}) }
                />
                <button className="confirmationButton"
                        onClick={() => this.handleClick()}
                >Check</button>
                <span className="resultsBox">Palindrome:{JSON.stringify(this.state.palindrome)} </span>
            </div>
        )
    }
}