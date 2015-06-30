var Reflux = require("reflux");

var PhoneDetailsActions = Reflux.createActions({
   "load":  {children: ["completed", "failed"]}
 }
);

module.exports = PhoneDetailsActions;
