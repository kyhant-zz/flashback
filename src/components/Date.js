import React, { Component } from 'react';
import { getArticles } from '../models/articles';
var exports = module.exports;

export default class Date extends Component {
  	constructor(props) {
  		super(props);

  		this.state = {date: null}
  	}

  	handleDateChange(e) {
  		e.preventDefault();
  		this.setState({date: this})
  		console.log('date', e.target.value)
  		var selectedDate = e.target.value;
  		getArticles(selectedDate)
  		.then(function(res) {
  			console.log('res', res)
  		})
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
