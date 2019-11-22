import React, { Component } from 'react';
import './App_test.css';

class App_test extends Component {
  constructor() {
    super();
    this.state = {
      max_servers:5
    };
  }

  render() {	
	 return (

    <div>
      <figure class="square-1">SQUARE 1</figure>
      <figure class="square-2">SQUARE 2</figure>
      <figure class="square-3">SQUARE 3</figure>
    </div>

	 );
  }
}

export default App_test;
