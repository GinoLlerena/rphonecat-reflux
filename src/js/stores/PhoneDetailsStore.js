var Reflux = require("reflux");
var request = require('superagent');
var PhoneDetailsActions = require("../actions/PhoneDetailsActions");

function handleLoad(data){
    console.log(data);
};

var PhoneDetailsStore = Reflux.createStore({
    listenables: PhoneDetailsActions,
    phone: {
      images: [],
      battery: {},
      storage: {},
      connectivity: {},
      android: {},
      sizeAndWeight: {
        dimensions: []
      },
      display: {},
      hardware: {},
      camera: {
        features: []
      }
    },
    init: function() {

    },

    loadData : function (phoneId) {
      console.log(phoneId);
      request.get('/phones/' + phoneId + '.json', function(err, response) {
            if (response.ok) {
                console.log(response);
                PhoneDetailsActions.load.completed(response.body);
            } else {
                console.log(response);
                PhoneDetailsActions.load.failed(response.error);
            }
        });
    },

    onLoad: function(phoneId) {
        this.loadData(phoneId);
    },
    onLoadCompleted: function(data) {
        this.phone = data;
        this.trigger(this.phone);
    },
    onLoadFailed: function(data) {
        handleLoad(data);
    },

   getInitialState: function() {
        return this.phone;
    }
});

module.exports = PhoneDetailsStore;
