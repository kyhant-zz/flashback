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
  }

  render() {
    if(this.state.date === null) {
      return (
        <div className='app'>
      	 <h1>Welcome to Flashback</h1>
         <div className='date'> 
          <h3>Choose a Date</h3>
          <input type='date' onChange={this._handleDateChange.bind(this)}></input>
        </div>
  	   </div>
      )
     } else {
      return (
        <div className='headlines'>
          <div className='date'> 
            <h3>Choose a Date</h3>
            <input type='date' onChange={this._handleDateChange.bind(this)}></input>
          </div>
          <Headlines date={this.state.date} />
        </div>
      )
     }
    }
  }
