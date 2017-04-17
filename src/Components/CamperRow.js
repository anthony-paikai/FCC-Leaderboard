import React from 'react';

function CamperRow(props){
	const {camper} = props;
	const {img, username, recent, alltime} = camper;
	return( 
		<li className="item">
			<img src={img} alt="profile_pic"/> <span id="text">| {username} | {recent} | {alltime}</span>
		</li>
	);
}

export default CamperRow;