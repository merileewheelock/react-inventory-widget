import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import FilterableProductTable from './FilterableProductTable';

class App extends Component {
    constructor(props){
        super(props)
    }
	render() {
		return (
			<div className="container App">
                <div className="col-sm-4 col-sm-offset-4">
    				<h1>Inventory Widget</h1>
                    <FilterableProductTable products={this.props.products} />
                </div>
			</div>
		);
	}
}

export default App;
