import React, { Component } from 'react';
import NodeList from './NodeList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      max_servers:10
    }
  }

  render() {
    const num_servers = this.state.max_servers;
	
	return (
		<NodeList num_nodes = {num_servers} />
	)
  }
}

export default App;
