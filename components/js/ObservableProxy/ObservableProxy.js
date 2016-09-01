var Observable = require("FuseJS/Observable");

function SetupProxy(debug) {
  if(debug) {
    printObjectMembers(Observable);
  }
}

function printObjectMembers(object) {
  for(key in object) {
    console.log("Name of key:" + key);
    console.log("Type of key:" + typeof(object[key]));
  }
}

module.exports = function() {
  SetupProxy(true);
};