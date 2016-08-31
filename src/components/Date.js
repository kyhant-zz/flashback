// import React, { Component } from 'react';
// import { getArticles } from '../models/articles';
// var exports = module.exports;

// export default class Date extends Component {
//   	constructor(props) {
//   		super(props);

//   		this.state = {
//   			date: null,
//   			headlines: null,
//   		}
//   	}

//   	handleDateChange(e) {
//   		e.preventDefault();
//   		this.setState({date: this})
//   		var self = this;
//   		var selectedDate = e.target.value;
//   		getArticles(selectedDate)
//   		.then(function(res) {
//   			var headlines = res.response.docs
//   			self.setState({headlines});
//   		})
//   	}

// 	  render() {
// 	    return (
// 	      <div className='date'> 
// 	      	<div>Choose a Date</div>
// 	      	<input type='date' onChange={this.handleDateChange.bind(this)}></input>
// 	  	  </div>
// 	    );
// 	  }
// }
