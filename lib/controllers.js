'use strict';

var Controllers = {};
var meta = require.main.require("./src/meta");
Controllers.renderAdminPage = function (req, res, next) {
	/*
		Make sure the route matches your path to template exactly.

		If your route was:
			myforum.com/some/complex/route/
		your template should be:
			templates/some/complex/route.tpl
		and you would render it like so:
			res.render('some/complex/route');
	*/

	res.render('admin/plugins/userLogin', {});
};

// Controllers.renderPage = function (req, res, next) {

// 	res.render('searchPlus', {});
// }

module.exports = Controllers;