var Reflux = require("reflux");

var PhoneActions = Reflux.createActions({
   "handleSearch": {},
   "load":  {children: ["completed", "failed"]}
 }
);

module.exports = PhoneActions;
