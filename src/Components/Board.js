import React, {Component} from 'react';
import CamperRow from './CamperRow';
import Legend from './Legend';
import SearchBar from './SearchBar';

class Board extends Component {

	constructor() {
		super();
		this.state = { sortedUser: [], 
					   recent: [], 
					   alltime: [], 
					   choice: "recent",
					   searchValue: ""
					 };

		this.handleClick = this.handleClick.bind(this);
		this.sortByUser = this.sortByUser.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
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

	handleClick(e) {
		this.setState({choice: e.target.id});
	}

	handleSearch(searchedUsers) {
		this.setState({searchValue: searchedUsers});
	}

	sortByUser() { 
		var sortUsers = this.state[this.state.choice];
		var sort = sortUsers.slice(0).sort(function compare(a,b) {
			if(a.username < b.username)
				return -1;
			if(a.username > b.username)
				return 1;
			return 0;
			});
		this.setState({sortedUser: sort });
		this.setState({choice: "sortedUser"});
	}

	render() {
		
		let camperRows = this.state[this.state.choice].map(item => <CamperRow key={item.lastUpdate} camper={item} searchValue={this.state.searchValue}/>);
		
		return (
			<div className="Board">
				<h1>The Leaderboard </h1>
				<h3>Sorted by {this.state.choice}</h3>
				<Legend handleClick={this.handleClick} sortByUser={this.sortByUser} />
				<SearchBar searchValue={this.state.searchValue} handleSearch={this.handleSearch} />
				<ol>
					{camperRows}
				</ol>
			</div>
		);
	}
}

export default Board;