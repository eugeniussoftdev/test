/**
 * dashboard.directives Modul
 *
 * Description
 */
var app = angular.module('directives.buttons', [])

.directive('twinsButtons', function () {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            config: '=',
            cb: "&",
            id: "=",
            sref: "=",
            action: '&'
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'directives/twinsbuttons/twinsbuttons.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function ($scope, iElm, iAttrs, controller) {

        	$scope.test = function(){


        	};
        	
        	// console.log($scope.sref);


            // $scope.config = $scope.type;
            // type
            // value
            // class
            // ui-sref
            // ng-click

        }
    };
});

module.exports = app;
