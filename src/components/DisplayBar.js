import React, {Component} from 'react'

import './DisplayBar.css'
class DisplayBar extends Component{
	render(){
		const string = this.props.data.join('')
		return(
			<div className="Display">
				{string}
			</div>
		)
	}
}

export default DisplayBar;