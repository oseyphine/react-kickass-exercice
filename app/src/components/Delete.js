import React, { Component } from 'react';

export default class Delete extends Component{
	constructor(props){
		super(props);
        this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		fetch('https://kickass-sdw-3a.herokuapp.com/api/user/' + this.props.del, {
			method: 'DELETE',
		})
	}

	render(){
		return(
			<div>
				<a className="btn btn-danger text-center" href={this.props.del} onClick={this.handleClick}>X</a>
			</div>
		)
	}
}