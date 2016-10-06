import React from 'react';

const Article = ({article}) => {
		return (
			<div className='article' key={article._id}>
				<a target='blank' href={article.web_url}><h6>{article.headline.main}</h6></a>
				<div className='snippet'>{article.snippet}</div>
				<hr/>
			</div>
		)
}

export default Article