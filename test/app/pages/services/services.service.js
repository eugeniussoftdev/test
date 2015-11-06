/**
 * Services Module
 *
 * Description
 */
var app = angular.module('dashboard.services')

.factory('Services', function ($http) {

        var obj = {};

        obj.getDataAll = function () {

            return $http.get('http://0.0.0.0:3000/api/services');
        };

        return obj;
})

module.exports = app;
