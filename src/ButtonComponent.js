import React from 'react';
import SquareComponent from './SquareComponent.js';
import './button.css';

class ButtonComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			buttonSymbols: ['(',')','CE','C',1,2,3,'+',4,5,6,'-',7,8,9,'*','.',0,'=','/']
		}

	}

	handleClick = e => {
		this.props.handleClick(e);
	};



	render() {
		const {buttonSymbols} = this.state;
		let list = buttonSymbols.map((element,key) => {
					if(!isNaN(element) || element === '.' || element === '=')
						return <SquareComponent ch={element} handleClick = {this.handleClick} />;
					else
						return <SquareComponent ch={element} className = "operator" handleClick = {this.handleClick}/>;
					});
		
		return (
			<div className="button">
				{list}
			</div>
		);
	}
}	

export default ButtonComponent;