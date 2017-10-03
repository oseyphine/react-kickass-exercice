import React, { Component } from 'react';
// import 'whatwg-fetch'
// import logo from './logo.svg';
// import './App.css';
import ListUsers from './components/ListUsers';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Post />
        <h1 className="text-center">List of Users</h1>
        <ListUsers />
      </div>
    );
  }
}

export default App;
