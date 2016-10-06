import React from 'react';
import Article from './Article'

const ArticleList = (props) => {
	console.log('PROPS',props)
		const headlines = props.articles.map(article => {
			return <Article 
				key={article._id}
				article={article} />
		})

		return (
			<div className='articleMain'>
				<h1>Here are the articles for {props.date}</h1>
				{headlines}
			</div>
		)
	}

export default ArticleList