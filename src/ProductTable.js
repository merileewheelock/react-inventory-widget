import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component{
	render(){
		var rows = [];
		var lastCategory = "";
		var key = 0;
		// console.log(this.props.products)
		this.props.products.products.map(function(currProduct, index){
			if(currProduct.category !== lastCategory){
				rows.push(<ProductCategoryRow key={key} category={currProduct.category} />)
				lastCategory = currProduct.category;
				key++;
			}
			rows.push(<ProductRow key={key} randomThing={currProduct} />)
			key++;
		});
		// console.log(rows);

		return(
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

export default ProductTable;