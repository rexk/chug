var fs = require('fs');
var spawn = require('child_process').spawn;
var Waiter = require('./Waiter');

var chug;
setImmediate(function immediatelySetChug() {
	chug = require('../chug');
});

var fileRoot = process.cwd() + '/';

/**
 * The Cache stores assets in a single file for fast reloading.
 * @constructor
 */
var Cache = module.exports = Waiter.extend({

	_store: {},

	/**
	 * Get a key from the cache
	 * @param key
	 * @returns {string}
	 */
	get: function (key) {
		return this._store[key];
	},

	/**
	 * Set a key in the cache.
	 * @param key
	 * @param value
	 * @returns {string}
	 */
	set: function (key, value) {
		return this._store[key] = value;
	},

	/**
	 * Remove a key from the cache.
	 * @param key
	 */
	remove: function (key) {
		delete this._store[key];
	},

	/**
	 * Write the cache to a file.
	 */
	write: function () {
	}

});