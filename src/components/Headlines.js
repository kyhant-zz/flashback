import React, { Component } from 'react';
import { getArticles } from '../models/articles';

export default class Headlines extends Component {
	constructor(props){
		super(props);

		this.state={headlines:[]}
	}

	componentDidMount() {
  		var self = this;
  		console.log('SELF',self)
  		console.log('THIS.PROPS.DATE', this.props.date)
  		getArticles(this.props.date)
  		.then(function(res) {
  			var headlines = res.response.docs
  			self.setState({headlines});
  		})
  	}

  	_handleDateChange() {
  		var self = this;
  		console.log('SELF',self)
  		console.log('THIS.PROPS.DATE', this.props.date)
  		getArticles(this.props.date)
  		.then(function(res) {
  			var headlines = res.response.docs
  			self.setState({headlines});
  		})
  	}  

	render() {
		console.log('this.state.headlines',this.state.headlines)
		return (
			<div className='headlineMain'>
				<h1>Here are the headlines for {this.props.date}</h1>
				{this.state.headlines
					.map((headline) => {
						return (
						<div className='article' key={headline._id}>
							<a target='blank' href={headline.web_url}><h6>{headline.headline.main}</h6></a>
							<div className='snippet'>{headline.snippet}</div>
							<hr/>
						</div>
						)
					})
				}
			</div>
		)
	}
}