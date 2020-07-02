import React from 'react';
import './button.css';
class SquareComponent extends React.Component {

	onClick = e => {
		this.props.handleClick(e);
	}

	render() {
		let className = this.props.className;
		return (			
			<button className={'square' + " " + className} name={this.props.ch} 
			onClick={e => this.onClick(e.target.name)}>{this.props.ch}</button>
			);
	}
	
}

export default SquareComponent;