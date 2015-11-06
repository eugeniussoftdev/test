// require('./style.less');

var controller = require('./mod1.Ctrl');
// require('./index.html');
/**
 * module1 Module
 *
 * Description
 */
angular.module('module1.controller', [])
    .controller('mod1Ctrl', controller)

/**
 * module1 Module
 *
 * Description
 */

var service = require('./mod1.Srvice');

/**
* module1.service Module
*
* Description
*/
angular.module('module1.service', [])
	.factory('fac', service)

var app = angular.module('module1', ['module1.controller', 'module1.service'])


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: './modules/mod1/index.html',
            controller: 'mod1Ctrl'
        })
})

module.exports = app;
