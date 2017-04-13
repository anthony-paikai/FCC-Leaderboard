import React, {Component} from 'react';
import '../style/App.css';
import CamperRow from './CamperRow';
import Legend from './Legend';

class Board extends Component {

	constructor() {
		super();
		this.state = { recent: [], alltime: [] , isRecent: true,
					   isAlphabet: false, isAlltime: false, choice: "recent"};
		this.handleClick = this.handleClick.bind(this);
		this.handleChoice = this.handleChoice.bind(this);
		console.log(this);
	}

	componentDidMount() {
		fetch('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then(result => result.json())
			.then(recent => this.setState({recent}))
			.catch(err => console.log(err))

		fetch('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then(result => result.json())
			.then(alltime => this.setState({alltime}))
			.catch(err => console.log(err))
	}

	handleClick(e){
		//this.setState({isRecent: !this.state.isRecent});
		this.setState({choice: e.target.id});
	}

	handleChoice(){
		if(this.state.choice === "recent"){
			return this.state.recent.map(item => <CamperRow key={item.lastUpdate} camper={item} />);
		}else if(this.state.choice === "alltime"){
			return this.state.alltime.map(item => <CamperRow key={item.lastUpdate} camper={item} />);
		}
	}


	render() {
		const {isRecent} = this.state;
		let camperRows = this.handleChoice();
		return (
			<div className="Board">
				<h1>The Leaderboard</h1>
				<Legend isRecent={isRecent} handleClick={this.handleClick}/>
				<ol>
					{camperRows}
				</ol>
			</div>
		);
	}
}

export default Board;