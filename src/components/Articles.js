import React, { Component } from 'react';
import { getArticles } from '../models/articles';

export default class articles extends Component {
	constructor(props){
		super(props);

		this.state={articles:[]}
	}

	componentDidMount() {
  		var self = this;
  		console.log('SELF',self)
  		console.log('THIS.PROPS.DATE', this.props.date)
  		// getArticles(this.props.date)
  		// .then(function(res) {
  		// 	var articles = res.response.docs
  		// 	self.setState({articles});
  		// })
  	}

  	// _handleDateChange() {
  	// 	var self = this;
  	// 	console.log('SELF',self)
  	// 	console.log('THIS.PROPS.DATE', this.props.date)
  	// 	getArticles(this.props.date)
  	// 	.then(function(res) {
  	// 		var articles = res.response.docs
  	// 		self.setState({articles});
  	// 	})
  	// }  

	render() {
		console.log('this.state.articles',this.state.articles)
		return (
			<div className='articleMain'>
				<h1>Here are the articles for {this.props.date}</h1>
				{this.state.articles
					.map((article) => {
						return (
						<div className='article' key={article._id}>
							<a target='blank' href={article.web_url}><h6>{article.headline.main}</h6></a>
							<div className='snippet'>{article.snippet}</div>
							<hr/>
						</div>
						)
					})
				}
			</div>
		)
	}
}