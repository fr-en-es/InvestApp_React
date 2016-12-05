var express = require('express')
var app = express()
var fs = require('fs');
//var questions = require('./questions.json');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');
  next();
});
app.get('/', function (req, res) {
   
  res.send('Invalid Endpoint')
})
app.get('/questions', function (req, res) {

    //var obj = JSON.parse(questions);
    var contents = fs.readFileSync(__dirname+ "/questions.json");
  res.send(contents);
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})