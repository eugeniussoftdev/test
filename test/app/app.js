// require('bootstrap-webpack!../bootstrap.config.js');
/**
 * app Module
 *
 * Description
 */
require('./modules/mod1/');
// require('./pages/main/');
require('./pages/');
require('./directives/');


var app = angular.module('app', ['ui.router',   'dashboard', 'directives'])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')
})
