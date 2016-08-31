import React, { Component } from 'react';
import { getArticles } from '../models/articles';

export default class Headlines extends Component {
	constructor(props){
		super(props);

		this.state={headlines:[]}
	}

	componentDidMount() {
  		var self = this;
  		getArticles(this.props.date)
  		.then(function(res) {
  			var headlines = res.response.docs
  			self.setState({headlines});
  		})
  	}  

	render() {
		return (
			<div className='articles'>
				<h1>Here are the headlines for selected day</h1>
				{this.state.headlines
					.map((headline) => {
						<h3>{headline.main}</h3>
					})
				}
			</div>
		)
	}
}