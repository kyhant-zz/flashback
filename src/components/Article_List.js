import React from 'react';
import Article from './Article'
var moment = require('moment');

const ArticleList = (props) => {
	console.log('PROPS',props)
		const date = moment(props.date).format("dddd, MMMM Do YYYY");
		const headlines = props.articles.map(article => {
			return <Article 
				key={article._id}
				article={article} />
		})

		return (
			<div className='articleMain'>
				<h1>Top Headlines for {date}</h1>
				{headlines}
			</div>
		)
	}

export default ArticleList