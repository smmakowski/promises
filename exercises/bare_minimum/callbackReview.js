/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
	fs.readFile(filePath, 'utf8', function(err, content) {
		if (err) {
			callback(err, content);
		} else {
			callback(err, content.split('\n')[0]);
		}
	});
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, function(err, statusCode){
  	if (err) {
  		callback(err, statusCode);
  	} else {
  		callback(err, 200);
  	}
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
