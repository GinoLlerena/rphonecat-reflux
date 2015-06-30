var Reflux = require("reflux");
var request = require('superagent');
var PhoneActions = require("../actions/PhoneActions");



function handleLoad(data){
    console.log(data);
};

var PhoneStore = Reflux.createStore({
    listenables: PhoneActions,
    phones:  [],
    init: function() {
            this.filter_text = {};
            this.sort_by = 'age';
    },

    onLoadData : function () {
      request.get('../../phones/phones.json', function(err, response) {
            if (response.ok) {
                console.log(response);
                PhoneActions.load.completed(response.body);
            } else {
                PhoneActions.load.failed(response.error);
            }
        });
    },

    onLoad: function() {
        this.onLoadData();
    },
    onLoadCompleted: function(data) {
        this.phones = data;
        this.trigger(this.phones);
    },
    onLoadFailed: function(data) {
        handleLoad(data);
    },

    onHandleSearch: function(filter_text, sort_by) {
      this.filter_text = filter_text;
      this.sort_by = sort_by;

      var filtered = $.grep(this.phones, function(phone) {
          return phone.name.toLowerCase().indexOf(filter_text) > -1;
        });

    console.log(this.sort_by);

    var sorted = filtered.sort(function(a, b) {
        if(sort_by === 'name')
          return a.name.localeCompare(b.name)
        else
          return a.age - b.age
      });

      this.trigger(sorted);
    },

   getInitialState: function() {
        return this.phones;
    }
});

module.exports = PhoneStore;
