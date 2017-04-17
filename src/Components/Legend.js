import React from 'react';

function Legend(props){
	const {handleClick, sortByUser} = props;
	return( 
		<div className="Legend">
			<button
				id="alphabet" 
				onClick={(e) => {
					handleClick(e); 
					sortByUser(); 
				}}
			>	
				Sort by Alphabet! 			
			</button>
			<button id="recent" onClick={ handleClick }>
				Sort by Past 30 days!
			</button>
			<button  id="alltime" onClick={handleClick }>
				Sort by All-time!
			</button>
		</div>
	);
}

export default Legend;