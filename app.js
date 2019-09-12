var express = require('express');
var app = express();
var { mongoose, User } = require("./mongoose")

app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get("/v1/addUser", function (request, response) {
  let data = {
    name: request.query.myinput
  }
  var addUser = new User(data)
  addUser.save()
  response.send({data:true1})
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})