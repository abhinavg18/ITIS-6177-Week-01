var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080, function(){
 console.log("server start at port 8080"); 
});