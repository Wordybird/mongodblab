var Lists = require('../models/lists');
var Countries = require('../models/countries');

var UI = function() {
    var lists = Lists();
    var countries = new Countries();

    this.renderLists(lists);

    countries.all(function(result) {
        this.renderCountries(result);
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

    renderCountries: function(countries) {
        var container = document.getElementById('countries');
        container.innerHTML = "";

        for (var country of countries) {
          var li = document.createElement('li');
          this.appendText(li, country, 'Country: ');

          container.appendChild(li);
        }
    }
}

module.exports = UI;