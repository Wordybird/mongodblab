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

    return [list1, list2];
}

module.exports = Lists;