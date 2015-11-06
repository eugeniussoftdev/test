/**
 * directives.inputform Module
 *
 * Description
 */
var app = angular.module('directives.inputform', [])

.directive('tmplForm', function (dataService, Services) {

    var defaultData = {
        contract_initiator: "",
        contract_number: "",
        contract_type: "",
        driver_name: "",
        id: "",
        name: ""
    };
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            config: '=',
            data: "=",
            id: "=",
            execute: "&"
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {

        // },
        // require: '', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'directives/inputform/inputform.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function ($scope, elem, attr) {

            console.log($scope);
            var id = $scope.id;
            $scope.head = $scope.config.columns;
            $scope.data = id ? $scope.data : defaultData;
            $scope.buttons = $scope.config.buttons;

            $scope.exe = function (data) {
                $scope.execute({
                    data: data
                });
            };
        }

    };
})

module.exports = app;
