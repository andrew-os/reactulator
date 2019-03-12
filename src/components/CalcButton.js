import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";

class CalcButton extends Component{
	render(){
		return (
			<Button
				onClick={this.props.onClick}
				className="Button button"
				data-size={this.props.size}
				data-value={this.props.value}
				size="large"
				color={this.props.color}
				>
				{this.props.label}
			</Button>
		)
	}
}

export default CalcButton;