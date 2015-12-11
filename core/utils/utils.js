var utils = module.exports = {};

utils.logger = require('./logger');
utils.loader = require('./loader');
utils.promise = require('bluebird');
utils.stringUtils = require('string');
utils.b64 = require('./b64');
utils.cheerio = require('cheerio');
utils.async = require('async');
utils.db = require('nedb');
