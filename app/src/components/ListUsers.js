import React, { Component } from 'react';
import Delete from './Delete';

export default class ListUsers extends Component{
	constructor(props){
		super(props);
		this.state={users: []}
	}

	componentDidMount(){
		fetch('https://kickass-sdw-3a.herokuapp.com/api/users')
		.then(function(response) {
			return response.json()
		}).then((user) => {
			this.setState({users: user});
			console.log(user);
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	}

	render(){
		return(
			<table className="table table-striped">
				<tbody>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Age</th>
						<th>Type</th>
					</tr>
					{
						this.state.users.map(
							(user, index) => {
								return <tr key={index}>
									<td>{user._id}</td>
									<td>{user.name}</td>
									<td>{user.age}</td>
									<td>{user.type}</td>
									<td><Delete del={user._id} /></td>
								</tr>
							}
						)
					}
				</tbody>
			</table>
		)
	}
}