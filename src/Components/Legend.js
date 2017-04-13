import React from 'react';
import '../style/App.css';

function Legend(props){
	const {isRecent, handleClick} = props;
	return( 
		<div className="Legend">
			<button className={isRecent && "active"}  onClick={() => handleClick() }>
				
				Sort by Past 30 days! 
				
			</button>
			<button className={!isRecent && "active"} onClick={() => handleClick() }>
	
				Sort by All-time!
			
			</button>
		</div>
	);
}

export default Legend;