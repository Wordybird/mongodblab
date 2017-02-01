var Lists = require('../models/lists');
var Countries = require('../models/countries');

var UI = function() {
    this.lists = new Lists;
    this.countries = new Countries();

    this.lists.all(this.renderLists.bind(this));

    this.countries.all(function(result) {
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

    addSelect: function(collection) {
        var select = document.createElement('select');

        for (var item of collection) {
          var option = document.createElement('option');
          option.value = item.name;
          option.text = item.name;
 
          select.appendChild(option);
        }

        this.form.appendChild(select);
    },

    renderForm: function(countries) {
        this.form = document.getElementById('ourForm');
        this.form.innerHTML = "";


        this.lists.all((this.addSelect).bind(this));
        this.countries.all((this.addSelect).bind(this));

        var button = document.createElement('button');
        button.type = 'submit';
        button.innerText = 'Add To List';

        this.form.appendChild(button);

        this.form.onsubmit = function(event) {
            event.preventDefault();


        }
    }
}

module.exports = UI;