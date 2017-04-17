import React from 'react';

function CamperRow(props){
	const {camper, searchValue} = props;
	const {img, username, recent, alltime} = camper;
	if(searchValue === "" || username.includes(searchValue)){
		return( 
			<li className="item">
				<img src={img} alt="profile_pic"/>
				 <span id="text">| {username} | {recent} | {alltime}</span>
			</li>
		);
	}
	return false;
}

export default CamperRow;