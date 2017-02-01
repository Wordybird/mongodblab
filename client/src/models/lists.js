var List = require('./list');

var Lists = function() {

    var list1 = new List({
        name: "1st Countries Bucket List",
        items: ["Germany", "Switzerland", "New Zealand", "India"]
    });

    var list2 = new List({
        name: "2nd Countries Bucket List",
        items: ["America","Brazil","South Africa"]
    });

    this.lists = [list1, list2];
}

Lists.prototype = {

    makeRequest: function (url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = callback;
      request.send();
    },

    populateLists: function(results) {
        var lists = [];
        for (var result of results) {
            var list = new List(result);
            lists.push(list);
        }
        return lists;
    },   

    all: function(callback) {
        var self = this;

        this.makeRequest('http://localhost:3000/api/lists', function() {
            if (this.status !== 200) {
                return;
            }
            var jsonString = this.responseText;
            var results = JSON.parse(jsonString);

            var lists = self.populateLists(results);
            callback(lists);
        });
    },

    find: function(listName, callback) {
        var list = this.lists.filter(function(list) {
            return listName === list.name
        })[0]

        callback(list);
    }
}

module.exports = Lists;