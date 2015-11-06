'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ui')
	.directive('headerNotification',function(){
		return {
        templateUrl:'/ui/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


