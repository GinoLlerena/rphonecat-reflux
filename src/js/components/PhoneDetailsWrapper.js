var React = require("react/addons");
var Reflux = require("reflux");
var PhoneDetailsActions = require("../actions/PhoneDetailsActions");
var PhoneDetailsStore = require("../stores/PhoneDetailsStore");
var PhoneDetails = require("./PhoneDetails");


var PhoneDetailsWrapper = React.createClass({
  mixins: [Reflux.connect(PhoneDetailsStore,"phone")],

  componentDidMount: function() {
     console.log(this.props.params.phoneId);
     PhoneDetailsActions.load(this.props.params.phoneId);
   },

   componentWillMount: function() {
     console.log(this.props.phone);
     PhoneDetailsActions.load(this.props.params.phoneId);
   },

  render: function() {
    return (
           <PhoneDetails phone={this.state.phone} active_image={this.state.active_image} />
    )
  }
});

module.exports = PhoneDetailsWrapper;
