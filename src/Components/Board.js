import React, {Component} from 'react';
import '../style/App.css';
import CamperRow from './CamperRow';

class Board extends Component {

	constructor() {
		super();
		this.state = { recent: [], alltime: [] };
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

	render() {
		const camperRows = this.state.recent.map(item => <CamperRow key={item.lastUpdate} camper={item} />) 
		return (
			<div className="Board">
				<h1>The Leaderboard{this.props.name}</h1>
				<ul>
					{camperRows}
				</ul>
			</div>
		);
	}
}

export default Board;