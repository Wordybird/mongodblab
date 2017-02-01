var express = require('express');
var listRouter = express.Router();
var app = express();


listRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

listRouter.get('/about', function(req, res){
  res.json({data: "All about us!"});
})

module.exports = listRouter;