var Lists = require('../models/lists');

var UI = function() {
    var lists = Lists();

    this.render(lists);
}

UI.prototype = {
    createText: function(text, label) {
        var p = document.createElement('p');
        p.innerText = label + text;
        return p;
    },

    appendText: function(element, text, label) {
        var pTag = this.createText(text, label);
        element.appendChild(pTag);
    },

    createItem: function(li, item) {
        this.appendText(li, item, 'Country: ');
    },

    render: function(lists) {
        var container = document.getElementById('lists');
        container.innerHTML = "";

        for (var list of lists) {
          var li = document.createElement('li');
          this.appendText(li, list.name, 'list: ');
          
          for (var item of list.items){
            this.createItem(li, item);
          }

          container.appendChild(li);
        }

        container.appendChild(this.createForm())  
    }
}

module.exports = UI;