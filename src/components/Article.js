import React from 'react';

const Article = ({article}) => {
	const toggleAccordion = (e) => {
		let acc = document.getElementsByClassName("accordion");

		for(let i = 0; i < acc.length; i++) {
	    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  		}	
		}
	}

	return (
		<div>
			<button className="accordion" onClick={toggleAccordion} key={article._id}>{article.headline.main}</button>
			<div className="panel">
			  <p>{article.snippet}
			  	<a target='blank' href={article.web_url}> Read more</a>
			  </p>
			</div>
		</div>
	)
}

export default Article