import React, {Component} from 'react';
import '../style/App.css';
import CamperRow from './CamperRow';
import Legend from './Legend';

class Board extends Component {

	constructor() {
		super();
		this.state = { recent: [], alltime: [] , isRecent: true};
		this.handleClick = this.handleClick.bind(this);
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

	handleClick(){
		this.setState({isRecent: !this.state.isRecent});
		console.log("switching recent");
	}

	render() {
		const {isRecent} = this.state;
		let camperRows = [];
		if(this.state.isRecent){
			 camperRows = this.state.recent.map(item => <CamperRow key={item.lastUpdate} camper={item} />) 
		}else{
			 camperRows = this.state.alltime.map(item => <CamperRow key={item.lastUpdate} camper={item} />)
		}
		return (
			<div className="Board">
				<h1>The Leaderboard</h1>
				<Legend isRecent={isRecent} handleClick={this.handleClick}/>
				<ul>
					{camperRows}
				</ul>
			</div>
		);
	}
}

export default Board;