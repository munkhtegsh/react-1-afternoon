import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['Harry', 'Potter', 'Hermany', 'Dambaldore', 'Wesley', 'Valdimort'],
            userInput: '',
            filteredArray: []
        };
    }

    handleClick() {
        let array = this.state.unfilteredArray.slice();
        let filteredArray = array.filter(name => {
            if (name.toLowerCase().includes(this.state.userInput.toLowerCase())) {
                return true;
            }
        });

        this.setState({filteredArray})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input type="text" 
                        className="inputLine"
                        onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button className="confirmationButton"
                        onClick={() => this.handleClick()}
                >Filter</button>
                <span className="resultsBox filterStringPB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}





// let array = this.state.unfilteredArray.slice();
// let filteredArray = array.filter((name, i) => {
//     let lowerName = name.toLowerCase();
//     if (loweNames.includes(this.state.userInput.toLowerCase())) {
//         return true;
//     }
// });
// console.log(filteredArray)