
require('./main/');
require('./table/');
require('./receivers/');
require('./services/');

/**
* dashboard Module
*
* Description
*/
var app = angular.module('dashboard', ['dashboard.main', 'dashboard.table', 'dashboard.receivers', 'dashboard.services', 'oc.lazyLoad',
    'ui.router'])

module.exports = app;