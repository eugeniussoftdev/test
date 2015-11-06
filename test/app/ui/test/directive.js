

/**
*  Module
*
* Description
*/
angular.module('ui', [])

.directive('test', function(){

	return {
		templateUrl: './index.html',
		restrict: 'E',
		replace: true
	}
})