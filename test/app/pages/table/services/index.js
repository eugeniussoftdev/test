/**
 * dashboard. Module
 *
 * Description
 */
angular.module('dashboard.table.services', [])

.config(function ($stateProvider, $urlRouterProvider) {
   	
   	$stateProvider
   		.state('dashboard.s', {
   			url: 'services',
   			templateUrl: 'pages/table/services/services.html'

   		})
}) 


	
