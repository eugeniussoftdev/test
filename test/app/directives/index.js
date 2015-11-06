
require('./pagination');
require('./inputform');
require('./table');
require('./twinsbuttons');

/**
* directives Module
*
* Description
*/
var app = angular.module('directives', ['directives.pagination', 'directives.inputform', 'directives.table', 'directives.buttons'])


module.exports = app;