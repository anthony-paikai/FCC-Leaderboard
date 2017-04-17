import React from 'react';

function CamperRow(props){
	const {camper, searchValue} = props;
	const {img, username, recent, alltime} = camper;
	if(searchValue === "" || username.includes(searchValue)){
		return( 
			<tr className="item">			
				<td><img src={img} alt="profile_pic"/></td>
				<td>{username}</td>
				<td>{recent}</td>
				<td>{alltime}</td>
			</tr>
		);
	}
	return false;
}

export default CamperRow;