/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Eisi Sig @eisisig
 */

var loaderUtils = require("loader-utils");

module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
	if ( !this.query ) throw new Error("query parameter is missing");
	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);
	var name = loaderUtils.interpolateName(this, query.by || "[name]", {});
	var results = "";
	results += "module.exports = " + "global[" + JSON.stringify(name) + "]";
	return results + " = " +
		"require(" + JSON.stringify("-!" + remainingRequest) + ");";
};
