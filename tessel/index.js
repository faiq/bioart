var tessel = require('tessel')
var audio = require('audio-vs1053b').use(tessel.port['A'])
var accel = require('accel-mma84').use(tessel.port['B'])
var climate = require('climate-si7020').use(tessel.port['C'])
var http = require('http')
var chunks = []

/*audio.on('data', function(data) {
    chunks.push(data);
})

audio.on('ready', function () { 
  console.log('audio connected')
  setInterval(function () {
    audio.startRecording('voice', function() {
      console.log('Recording...')
    })

    audio.stopRecording(function() { 
      console.log(chunks)
*/
      var req = http.request(
        { 
          hostname: 'http://62e9139a.ngrok.com',
          port: 8000,
          method: 'POST',
          path:'/audio' 
        }
      , function(res) {
        console.log("http res");
        res.on('data', function(chunk) { console.log("BODY: " + chunk) });
      });

    req.on('error', function(e) { console.log("Problem with request: %s", e.message)});

    req.end();

/*
      chunks = []
    })

  }, 10000)
})*/
