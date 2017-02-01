var Lists = require('../models/lists');
var Countries = require('../models/countries');

var UI = function() {
    this.lists = Lists();
    var countries = new Countries();

    this.renderLists(this.lists);

    countries.all(function(result) {
        this.renderForm(result);
    }.bind(this));
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

    renderLists: function(lists) {
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

    },

    createSelect: function(collection) {
        var select = document.createElement('select');

        for (var item of collection) {
          var option = document.createElement('option');
          option.value = item.name;
          option.text = item.name;
 
          select.appendChild(option);
        }

        return select;
    },

    renderForm: function(countries) {
        var form = document.getElementById('ourForm');
        form.innerHTML = "";

        var lists = this.createSelect(this.lists);
        var countries = this.createSelect(countries);

        form.appendChild(lists);
        form.appendChild(countries);

        var button = document.createElement('button');
        button.type = 'submit';
        button.innerText = 'Add To List';

        form.appendChild(button);

        
    }
}

module.exports = UI;