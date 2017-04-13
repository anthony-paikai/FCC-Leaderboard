import React from 'react';
import '../style/App.css';

function Legend(props){
	const {isRecent, isAlphabet, isAlltime, handleClick, sortByUser} = props;
	return( 
		<div className="Legend">
			<button className={isAlphabet && "active"}  id="alphabet" onClick={() => sortByUser() }>	
				Sort by Alphabet! 			
			</button>
			<button className={isRecent && "active"} id="recent" onClick={(e) => handleClick(e) }>
				Sort by Past 30 days!
			</button>
			<button className={isAlltime && "active"} id="alltime" onClick={(e) => handleClick(e) }>
				Sort by All-time!
			</button>
		</div>
	);
}

export default Legend;