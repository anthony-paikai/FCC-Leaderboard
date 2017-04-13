import React from 'react';
import '../style/App.css';

function Legend(props){
	const {isRecent, handleClick} = props;
	return( 
		<div className="Legend">
			<button className={isAlphabet && "active"}  onClick={() => handleClick(isAlphabet) }>	
				Sort by Alphabet 			
			</button>
			<button className={isRecent&& "active"} onClick={() => handleClick(isRecent) }>
				Sort by Past 30 days!
			</button>
			<button className={isAlltime&& "active"} onClick={() => handleClick(isAlltime) }>
	
				Sort by All-time!
			
			</button>
		</div>
	);
}

export default Legend;