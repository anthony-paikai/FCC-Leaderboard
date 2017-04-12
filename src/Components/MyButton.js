import React, { Component } from 'react';
import '../style/App.css';

class MyButton extends Component{
	constructor(props){
		super(props);
		this.state = {isOn : null};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){

		this.setState(
			{isOn : !this.state.isOn},
		 	()=> console.log(this.state.isOn));

	}
	render() {
		return (
			<button className="MyButton" onClick={this.handleClick}>
				{this.state.isOn ? 'on' : 'off'}
			</button>
		);
	}
}

export default MyButton;