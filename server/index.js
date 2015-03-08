var express = require("express")
var http = require("http")
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express() 

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

app.post('/audio', function (req, res) { 
  console.log('asfasfd')
  console.log(req.body)
  res.send('ok')
})

http.createServer(app).listen('8000', '127.0.0.1')
