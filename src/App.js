import React, { Component } from 'react';

import update from 'immutability-helper'
import math from 'mathjs'

import DisplayBar from './components/DisplayBar';
import CalcButtons from './components/CalcButtons';
import CalcButton from './components/CalcButton';

import './App.css';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { operations: [] }
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = e => {
		const value = e.target.getAttribute('data-value')
		switch(value){
			case 'clear' :
			this.setState({
				operations: [],
			})
			break
			case 'equal' : 
			this.calculateOperations()
			break
			default:
			const newOperations = update(this.state.operations, {
				$push: [value],
			})
			this.setState({
				operations: newOperations,
			})
			break
		}
	}
	calculateOperations = () => {
		let result = this.state.operations.join('')
		if(result){
			result = math.eval(result)
			result = math.format(result, { precision: 14})
			this.setState({
				operations: [result],
			})
		}
	}
  render() {
    return (
	  <div className="App reactulator">
	  <DisplayBar data={this.state.operations} />
		<CalcButtons>
			<CalcButton onClick={this.handleClick} label="+" value="+" color="success"/>
			<CalcButton onClick={this.handleClick} label="-" value="-" color="success"/>
			<CalcButton onClick={this.handleClick} label="*" value="*" color="success"/>
			<CalcButton onClick={this.handleClick} label="/" value="/" color="success"/>

			<CalcButton onClick={this.handleClick} label="7" value="7" color="primary"/>
			<CalcButton onClick={this.handleClick} label="8" value="8" color="primary"/>
			<CalcButton onClick={this.handleClick} label="9" value="9" color="primary"/>

			<CalcButton onClick={this.handleClick} label="4" value="4" color="primary"/>
			<CalcButton onClick={this.handleClick} label="5" value="5" color="primary"/>			
			<CalcButton onClick={this.handleClick} label="6" value="6" color="primary"/>
			
			<CalcButton onClick={this.handleClick} label="1" value="1" color="primary"/>
			<CalcButton onClick={this.handleClick} label="2" value="2" color="primary"/>
			<CalcButton onClick={this.handleClick} label="3" value="3" color="primary"/>
			
			<CalcButton onClick={this.handleClick} label="0" value="0" color="warning"/>
			<CalcButton onClick={this.handleClick} label="C" value="clear" color="danger"/>
			<CalcButton onClick={this.handleClick} label="=" value="equal" color="success"/>


			

			
		</CalcButtons>
      </div>
    );
  }
}

export default App;
