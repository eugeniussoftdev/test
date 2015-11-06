'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ui', [])
    .directive('header', function() {
        return {
            templateUrl: '/ui/header/header.html',
            restrict: 'E',
            replace: true,
        }
    });
