import fetch from 'isomorphic-fetch';
var apiParams = require('../components/Date');


export function getArticles(selectedDate) {
	var date = selectedDate.replace(/-/g,'');
	var apiKey = '4e12c9d59d244a67a6da017f068d7d59';
	var url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&begin_date=${date}&end_date=${date}`;
	return fetch(url)
  .then(function(data){
 		console.log(data)
  	return data.json();
	})
}


// var exports = module.exports;

// exports.getArticles = function(date) {
	// var apiKey = '4e12c9d59d244a67a6da017f068d7d59';
// 	var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api=key=${apiKey}?begin_date=${date}?end_date=${date}`;


// 	url += '?' + $.param({
// 	  'api-key': "apiKey",
// 	  'begin_date': "date",
// 	  'end_date': "date"
// 	});
// 	$.ajax({
// 	  url: url,
// 	  method: 'GET',
// 	}).done(function(result) {
// 	  console.log(result);
// 	}).fail(function(err) {
// 	  throw err;
// 	});
// }