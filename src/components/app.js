import React, { Component } from 'react';
import Date from './Date';
import ArticleList from './Article_List';
import { getArticles } from '../models/articles';
var moment = require('moment');

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
      	  <div className="foo">
            <span className="letter" data-letter="f">f</span>
            <span className="letter" data-letter="l">l</span>
            <span className="letter" data-letter="a">a</span>
            <span className="letter" data-letter="s">s</span>
            <span className="letter" data-letter="h">h</span>
            <span className="letter" data-letter="b">b</span>
            <span className="letter" data-letter="a">a</span>
            <span className="letter" data-letter="c">c</span>
            <span className="letter" data-letter="k">k</span>
            
            <h3>What happened the day you were born?</h3>
            <div className='date'> 
              <h4>Select a date to find out:</h4>
              <Date onDateChange={this.articleSearch.bind(this)} />
            </div>
          </div>
        </div>
      )
     } else {
      return (
        <div>
          <div className="header">
            <h1 className='header'>Top NYT Headlines for {moment(this.state.date).format("dddd, MMMM Do YYYY")}</h1>
            <Date onDateChange={this.articleSearch.bind(this)} />
          </div>
          <div className='articles'>
            <ArticleList 
              articles={this.state.articles}
              date={this.state.date} />
          </div>
        </div>
      )
     }
    }
  }
