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

    all: function(callback) {
        callback(this.lists);
    },

    find: function(listName, callback) {
        var list = this.lists.filter(function(list) {
            return listName === list.name
        })[0]

        callback(list);
    }
}

module.exports = Lists;