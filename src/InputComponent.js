import React from 'react';
import './result.css';

class InputComponent extends React.Component {
	
	render() {
		
		return (
			<div class = "input">{this.props.result}</div>
			);
		
	}
	
}

export default InputComponent;