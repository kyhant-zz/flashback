import React, { Component } from 'react';

export default class Date extends Component {
  	constructor(props) {
  		super(props);

  		this.state = {
  			date: null,
  		}
  	}


    render() {
      return (
        <div className='date'> 
          <input type='date' onChange={event => this.handleDateChange(event.target.value)}></input>
        </div>
      );
    }

  	handleDateChange(date) {
      this.setState({date})
      this.props.onDateChange(date)
  	}
}
