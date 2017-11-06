var https = require('https');

function getAndPrintHTML (options) {



https.get(options, function (response) {
  var rawData = ''
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
  rawData += data;
  });



response.on('end', function() {
console.log(rawData);

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream

});

  /* Add your code here */
});


}
  var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
  };


getAndPrintHTML(requestOptions);