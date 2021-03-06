import React, { Component } from 'react';

class MyForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event){
		console.log("User submitted the form. Entered: " + this.state.value);
		event.preventDefault();
	}

	handleChange(event){
		console.log(event);
		this.setState({
			value: event.target.value
		})
		console.log("User changed input box to " + this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default MyForm