function arrayception (array) {

  var arr = this;
  var count = 0;
  function checkForArrays (array,depth) {
  	  for(var i = 0; i < array.length; i++) {
	  	  if(Array.isArray(array[i])) {
	  			checkForArrays(array[i], depth + 1)
      } else {
     	count = depth > count ? depth : count
      }
  	}
  }
  checkForArrays(array, 1)
  return count;
}

module.exports = {
  arrayception
}