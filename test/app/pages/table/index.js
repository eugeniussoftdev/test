require('./newreciever');
require('./edit');
require('./services');
/**
 * dashboard Module
 *
 * Description
 */

var app = angular.module('dashboard.table', ['dashboard.table.add', 'dashboard.table.edit', 'dashboard.table.services'])

.controller('testCtrl', function ($scope, Service) {


        // $scope.dataset = $scope.dataset ? JSON.parse($scope.dataset) : [];
        // $scope.testdata = Service.getIndex();

        // $scope.dataTest = {
        //     id: 111,
        //     name: "Kikik"
        // };
        $scope.dataTest = {};

        console.log($scope.dataTest);

        $scope.Service = Service;
        $scope.dataset = Service.getData();

        $scope.submit = function (item) {
            console.log(item);
            $scope.Service.add(item);

        };

        $scope.remove = function (id) {

            $scope.Service.remove(id);
        };
        $scope.counter = 0;
        $scope.edit = function (id) {
            // $scope.editData = id;

            // $scope.counter = id;
            $scope.Service.edditName(id);
        };
        $scope.test = function () {
            console.log( $scope.dataTest);
            $scope.Service.add($scope.dataTest);
        };
        $scope.transfer = function () {
            $scope.dataTest = Service.getIndex();
        };
        $scope.transfer();

    })
    .factory('Service', function () {

        var dataset = localStorage.getItem('data');
        dataset = dataset ? JSON.parse(dataset) : [];

        var _obj = {};
        var obj = {};

        obj.getData = function () {
            return dataset;
            // localStorage.getItem('data');
        };

        obj.add = function (item) {
            console.log(item);
            // console.log(item)

            // dataset.push({
            //     "name": id++,
            //     "name": item.name,
            //     "name": item.driver
            // });
            dataset.push(item);
            // console.log(dataset);

            localStorage.setItem('data', JSON.stringify(dataset));
        };
        obj.remove = function (index, x, data) {
            // should delete by ID
            console.log(x);
            console.log(dataset);
            console.log(index);
            // dataset.splice(x, 1);

            localStorage.setItem('data', JSON.stringify(dataset));
            // for (var i = 0; i < dataset.length; i += 1) {
            // console.log(dataset[i].name === index.name && dataset[i].lastName === index.lastName);
            //     if (dataset[i].name === index.name && dataset[i].lastName === index.lastName) {

            //         delete dataset[i];
            //         localStorage.setItem('data', JSON.stringify(dataset));
            //     }
            // }
        };
        obj.edditName = function (obj) {

            console.log(obj);
            _obj = obj;

        };
        obj.edditProvider = function () {

        };
        obj.data = function () {
            return dataset;
        };
        obj.getIndex = function () {

            console.log(_obj);
            return _obj;
        };

        return obj;

    })

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dashboard.table', {
            url: 'table',
            templateUrl: '/pages/table/table.html',
            controller: 'testCtrl'
        })
})

module.exports = app;
