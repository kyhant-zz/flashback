import React, { Component } from 'react';
import Date from './Date';
import ArticleList from './Article_List';
import { getArticles } from '../models/articles';

export default class App extends Component {
  constructor(props) {
  	super(props)

  	this.state = {
  		date: null,
      articles:[]
  	}
  }

  articleSearch(date){
    let self = this;
    getArticles(date) 
    .then(function(articles) {
      self.setState({
        articles: articles.response.docs,
        date:date
      })
    })
  }


  render() {
    if(this.state.date === null) {
      return (
        <div className='app'>
      	 <h1>Flashback</h1>
         <h3>What happened the day you were born?</h3>
         <div className='date'> 
          <h6>Select a date to get started</h6>
          <Date onDateChange={this.articleSearch.bind(this)} />
        </div>
  	   </div>
      )
     } else {
      return (
        <div className='articles'>
          <Date onDateChange={this.articleSearch.bind(this)} />
          <ArticleList 
            articles={this.state.articles}
            date={this.state.date} />
        </div>
      )
     }
    }
  }
