
var https = require('https');


function getHTML (options, callback) {

 https.get(options, function (response) {
  var rawData = ''
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
  rawData += data;
  });



response.on('end', function() {
callback(rawData);


//console.log(rawData);


});

  /* Add your code here */
}); /* Add your code here */

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);