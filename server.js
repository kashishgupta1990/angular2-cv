var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./server/public', {cache: 3600});

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    //
    // Serve files!
    //
    file.serve(request, response);
  }).resume();
}).listen(7002, function (err) {
  if(err){

  }else{
    console.log("kashishgupta.in server Running on port 7002 ");
  }
});
