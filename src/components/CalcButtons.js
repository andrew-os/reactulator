import React, { Component } from 'react';

import './CalcButtons.css'

class CalcButtons extends Component{
	render() {
		return (
			<div className="Buttons reactulator-keys">{this.props.children}</div>
		)
	}
}
export default CalcButtons;