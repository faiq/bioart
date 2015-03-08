var http = require('http');

setImmediate(function loop() {
  var req = http.request(
    { hostname: 'www.google.com',
      port: 80,
      method: 'GET'}
      , function(res) {
        console.log("http res");
        res.on('data', function(chunk) { console.log("BODY: " + chunk) });
      });

  req.on('error', function(e) { console.log("Problem with request: %s", e.message)});

  req.end();
});
