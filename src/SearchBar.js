import React, { Component } from 'react';

class SearchBar extends Component{
	render(){
		return(
			<form className="search-bar">
				<input type="text" placeholder="Search..." />
			</form>
		)
	}
}

export default SearchBar;