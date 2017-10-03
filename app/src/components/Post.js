import React, { Component } from 'react';

export default class Post extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			age: "",
			type: "",
		}

		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e){
		const target = e.target;
		const value = target.value;
		const nameOfInput = target.name;
		this.setState({[nameOfInput]: value});
	}

	handleSubmit(e){
		e.preventDefault();
		const {name, age, type} = this.state;

		fetch('https://kickass-sdw-3a.herokuapp.com/api/user', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				age: age,
				type: type,
			})
		})
	}

	render(){
		return(
			<div>
				<form className="text-center" onSubmit={this.handleSubmit}>
					<h1>Formulaire</h1>
					<div className="form-group">
				    	<label htmlFor="exampleInputEmail1">Nom</label>
				    	<input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={this.handleChange} />
					</div>
					<div className="form-group">
				    	<label htmlFor="exampleInputEmail1">Age</label>
				    	<input type="text" className="form-control" id="age" name="age" placeholder="Age" onChange={this.handleChange} />
					</div>
				  	<div className="form-group">
				    	<label htmlFor="exampleInputEmail1">Type</label>
				    	<input type="text" className="form-control" id="type" name="type" placeholder="Type" onChange={this.handleChange} />
					</div>
					<button type="submit" className="btn btn-primary text-center">Valider</button>
				</form>
			</div>
		)
	}
}