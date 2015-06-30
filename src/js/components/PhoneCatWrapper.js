/** @jsx React.DOM */
 var React = require("react/addons");
 var Reflux = require("reflux");
 var PhoneCat = require("./PhoneCat");
 var PhoneStore = require("../stores/PhoneStore");
 var PhoneActions = require("../actions/PhoneActions");

var PhoneCatWrapper = React.createClass({
  mixins: [Reflux.connect(PhoneStore,"phones")],
   
 componentDidMount: function() {
    PhoneActions.load();
  },  
   
  componentWillMount: function() {
    PhoneActions.load();
  },
     
  render: function() {       
    console.log(this.state.phones);
    return (
      <PhoneCat phones={this.state.phones}  />
    )

  }

});

module.exports = PhoneCatWrapper;
