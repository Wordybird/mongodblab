/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	    new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Lists = __webpack_require__(2);
	var Countries = __webpack_require__(4);
	
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var List = __webpack_require__(3);
	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var List = function(options) {
	    this.name = options.name;
	    this.items = options.items || [];
	}
	
	List.prototype = {
	    addItem: function(item) {
	        this.items.push(item);
	    },
	
	    size: function() {
	        return this.items.length
	    }
	}
	
	module.exports = List;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Countries = function() {
	
	};
	
	Countries.prototype = {
	
	    makeRequest: function (url, callback) {
	      var request = new XMLHttpRequest();
	      request.open('GET', url);
	      request.onload = callback;
	      request.send();
	    },
	
	    all: function(callback) {
	
	        var self = this;
	
	        this.makeRequest('https://restcountries.eu/rest/v1/all', function() {
	            if (this.status !== 200) {
	                return;
	            }
	            var jsonString = this.responseText;
	            var results = JSON.parse(jsonString);
	
	            var countries = self.populateCountries(results);
	            callback(countries);
	        });
	    },
	
	    populateCountries: function(results) {
	        var countries = [];
	        for (var result of results) {
	            var country = {name: result.name};
	            countries.push(country);
	        }
	        return countries;
	    }   
	
	}
	
	module.exports = Countries;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map