var React = require("react");
var PhoneActions = require("../actions/PhoneActions");

var SearchForm = React.createClass({
	
	onChangeHandler: function() {
		    var query = this.refs.query.getDOMNode().value.trim();
		    var order = this.refs.order.getDOMNode().value;
		    PhoneActions.handleSearch(query, order);
			/*console.log(query);*/
		  },
	

	
	render : function () {
		return ( 
			<div>
		        Search:
		        <input type="text" value={this.props.filter_text} ref="query" onChange={this.onChangeHandler} />
		        Sort by:
		        <select value={this.props.sort_by} ref="order" onChange={this.onChangeHandler}>
		          <option value="name">Alphabetical</option>
		          <option value="age">Newest</option>
		        </select>
		      </div>
		)
	} 
});

module.exports = SearchForm;