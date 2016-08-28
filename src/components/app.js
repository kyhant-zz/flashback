import React, { Component } from 'react';
import Date from './Date';

export default class App extends Component {
  constructor(props) {
  	super(props)

  	this.state = {
  		date: null
  	}
  }

  render() {
    return (
      <div className='app'>
      	<div>Welcome to Flashback</div>
      	<Date />
  	  </div>
    );
  }
}
