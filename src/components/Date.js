import React, { Component } from 'react';

export default class Date extends Component {
  	constructor(props) {
  		super(props);

  		this.state = {date: null}
  	}

  	handleDateChange(e) {
  		e.preventDefault();
  		this.setState({date: this})
  		console.log('date', e.target.value)
  	}

	  render() {
	    return (
	      <div className='date'> 
	      	<div>Choose a Date</div>
	      	<input type='date' onChange={this.handleDateChange.bind(this)}></input>
	  	  </div>
	    );
	  }
}
