import React from 'react';

function SearchBar(props) {
	const {searchValue, handleSearch} = props;
	return (
		<form>
			<input type="text" 
				   placeholder="Search for user..." 
				   value={searchValue}
				   onChange={(e) => {handleSearch(e.target.value)}}

			 />
			
		</form>
	);
}

export default SearchBar;