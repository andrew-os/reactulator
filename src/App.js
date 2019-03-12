import React, { Component } from 'react';
import logo from './logo.svg';

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
  render() {
    return (
	  <div className="App reactulator">
	  <DisplayBar data={this.state.operations} />
		<CalcButtons>
			<CalcButton onClick={this.handleClick} label="+" value="+" color="success"/>
			<CalcButton onClick={this.handleClick} label="-" value="-" color="success"/>
			<CalcButton onClick={this.handleClick} label="*" value="*" color="success"/>
			<CalcButton onClick={this.handleClick} label="/" value="/" color="success"/>

			<CalcButton onClick={this.handleClick} label="7" value="clear" color="primary"/>
			<CalcButton onClick={this.handleClick} label="8" value="clear" color="primary"/>
			<CalcButton onClick={this.handleClick} label="9" value="clear" color="primary"/>

			<CalcButton onClick={this.handleClick} label="4" value="clear" color="primary"/>
			<CalcButton onClick={this.handleClick} label="5" value="clear" color="primary"/>			
			<CalcButton onClick={this.handleClick} label="6" value="clear" color="primary"/>
			
			<CalcButton onClick={this.handleClick} label="1" value="clear" color="primary"/>
			<CalcButton onClick={this.handleClick} label="2" value="clear" color="primary"/>
			<CalcButton onClick={this.handleClick} label="3" value="clear" color="primary"/>
			
			<CalcButton onClick={this.handleClick} label="0" value="0" color="danger"/>
			<CalcButton onClick={this.handleClick} label="." value="C" color="danger"/>
			<CalcButton onClick={this.handleClick} label="=" value="=" color="danger"/>


			

			
		</CalcButtons>
      </div>
    );
  }
}

export default App;
