import React, { Component } from 'react';
import Date from './Date';
import Headlines from './Headlines';
import { getArticles } from '../models/articles';

export default class App extends Component {
  constructor(props) {
  	super(props)

  	this.state = {
  		date: null,
      headlines:[]
  	}
  }

  _handleDateChange(e) {
    e.preventDefault();
    var selectedDate = e.target.value;
    this.setState({date: selectedDate})
    // var self = this;
    // getArticles(selectedDate)
    // .then(function(res) {
    //   var headlines = res.response.docs
    //   self.setState({headlines});
    // })
  }

  render() {
    if(this.state.date === null) {
      return (
        <div className='app'>
      	 <div>Welcome to Flashback</div>
         <div className='date'> 
          <div>Choose a Date</div>
          <input type='date' onChange={this._handleDateChange.bind(this)}></input>
        </div>
  	   </div>
      )
     } else {
      return (
        <div className='headlines'>
          <Headlines date={this.state.date} />
        </div>
      )
     }
    }
  }
