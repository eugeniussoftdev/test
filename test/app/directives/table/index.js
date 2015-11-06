/**
 * directives.table Module
 *
 * Description
 */
var app = angular.module('directives.table', [])
    .directive('bigTable', function () {

        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                content: '=',
                id: '='
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '<h2>Hew table</h2>',
            templateUrl: 'directives/table/table.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function ($scope, el, attr) {

                $scope.table = $scope.content.columns;
                $scope.data = $scope.content.data;

                $scope.test = function (id) {
                    $scope.id = id;
                };
            }
        };
    });

module.exports = app;
