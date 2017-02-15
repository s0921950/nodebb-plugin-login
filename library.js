"use strict";

var User = module.parent.require('./user');
var db = module.parent.require('./database');
var controllers = require('./lib/controllers'),

	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	// router.get('/userLogin', hostMiddleware.buildHeader, controllers.renderPage);
	// router.get('/api/userLogin', controllers.renderPage);

	router.get('/admin/plugins/userLogin', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/userLogin', controllers.renderAdminPage);

	callback();
};

plugin.writeData = function(uids) {
	var d = new Date();
	var todayTime = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate(), 0, 0, 0, 0).getTime();

	var data = {loginTime:  Date.now(),uids:uids};

	db.addCountLogin('user:login',  Date.now(), data);
};

module.exports = plugin;