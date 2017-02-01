var express = require('express');
var listRouter = express.Router();
var app = express();
var List = require('../client/src/models/list');

var list1 = new List({
    name: "1st Countries Bucket List",
    items: ["Germany", "Switzerland", "New Zealand", "India"]
});

var list2 = new List({
    name: "2nd Countries Bucket List",
    items: ["America","Brazil","South Africa"]
});

var lists = [list1, list2];


listRouter.get('/', function (req, res) {
  res.json(lists);
});

listRouter.put('/', function(req, res) {
    lists.push(new List(req.body));
    console.log(lists);
    res.json(lists);
})

module.exports = listRouter;