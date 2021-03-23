import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className = 'pa2'>
			<input className = 'ba b--green bg-lightest-blue' type = 'search' placeholder = 'search robot' onChange = {searchChange} />
		</div>
	);
}

export default SearchBox;