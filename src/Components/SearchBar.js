import React from 'react';

function SearchBar(props) {
	const {searchValue, handleSearch} = props;
	return (
		<form className="SearchBox">
			<input type="text" 
				   placeholder="Search for user..." 
				   value={searchValue}
				   onChange={handleSearch}

			 />
			
		</form>
	);
}

export default SearchBar;