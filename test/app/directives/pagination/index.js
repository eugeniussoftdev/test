/**
 * directives Module
 *
 * Description
 */
var app = angular.module('directives.pagination', [])

.directive('pagination', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/pagination/pagination.html',
        // controller: function($scope){
        //  console.log($scope);
        // },
        link: function ($scope, element, attrs, controllers) {

            $scope.pages = [];
            var pageCount = $scope.dataset.length / 4;
            for (var i = 1; i < pageCount; i += 1) {

                $scope.pages.push(i);
            };
            $scope.pageIndex = 1;
            // console.log($scope.dataset.length / 5);

            $scope.press = function (index) {

                    $scope.pageIndex = index;
                }
                // console.log($scope);

        }
    }
})

.filter('range', function () {

    return function (data, page, size) {
        var start = page * size - size;
        var end = page * size;

        return data.slice(start, end);
    }
})

module.exports = app;
