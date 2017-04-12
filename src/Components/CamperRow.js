import React from 'react';
import '../style/App.css';

function CamperRow(props){
	const {item} = props;
	const {img, username, recent, alltime} = item;
	return( 
		<li className="item">
			 <img src={img} alt="profile_pic"/> | {username} | {recent} | {alltime}
		</li>
	);
}

export default CamperRow;