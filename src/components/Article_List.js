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
				{headlines}
			</div>
		)
	}

export default ArticleList