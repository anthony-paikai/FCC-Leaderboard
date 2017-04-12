import React, {Component} from 'react';
import '../style/App.css';
import CamperRow from './CamperRow';

class Board extends Component {

	constructor() {
		super();
		this.state = { items: [] };
	}

	componentDidMount() {
		fetch('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then(result => result.json())
			.then(items => this.setState({items}))
			.catch(err => console.log(err))
	}

	render() {
		const itemArray = this.state.items.map(item => <CamperRow key={item.lastUpdate} item={item} />) 
		return (
			<div className="Board">The Leaderboard{this.props.name}
				<ul>
					{itemArray}
				</ul>
			</div>
		);
	}
}

export default Board;