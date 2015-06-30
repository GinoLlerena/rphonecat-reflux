var Reflux = require("reflux");
var request = require('superagent');
var PhoneImageActions = require("../actions/PhoneImageActions");


var PhoneImageStore = Reflux.createStore({
    listenables: PhoneImageActions,
    init: function() {
         active_image = ''
    },

    onHandleThumbClick: function(image_path){
      console.log("Image Store : " +image_path);
      this.active_image = image_path;
      this.trigger(this.active_image);
    },

   getInitialState: function() {
        return this.active_image;
    }
});

module.exports = PhoneImageStore;
