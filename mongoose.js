var mongoose = require('mongoose') // 引入 mongoose
var url = "mongodb://localhost:27017/mytest"; // 本地数据库地址
mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log('连接成功')
  }
});
// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Successful connection to " + url)
});
var Schema = mongoose.Schema //schema 都会映射到一个 MongoDB collection

let user = {
  name: String
}

var userSchema = Schema(user)
var User = mongoose.model('User', userSchema); //将schema编译为model构造函数

var newUser = new User({ name: "yyyyyyyyyyyy" })// Mongoose 会自动找到名称是 model 名字复数形式的 collection
newUser.save()
module.exports = { mongoose, User }
