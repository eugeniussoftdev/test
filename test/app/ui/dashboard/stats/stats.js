'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ui')
    .directive('stats', function() {
    	return {
  		templateUrl:'/app/ui/dashboard/stats/stats.html',
  		restrict:'E',
  		replace:true,
  		// scope: {
    //     'model': '=',
    //     'comments': '@',
    //     'number': '@',
    //     'name': '@',
    //     'colour': '@',
    //     'details':'@',
    //     'type':'@',
    //     'goto':'@'
  		// }
  		
  	}
  });
