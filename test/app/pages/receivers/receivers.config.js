/**
 * dashboard.receivers Module
 *
 * Description
 */
var app = angular.module('dashboard.receivers')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('dashboard.receivers', {
                url: 'receivers',
                template: '<big-table content="config"></big-table>',
                controller: function ($scope, $stateParams, dataList) {
                    console.log($stateParams);
                    var id = $stateParams.id;
                    $scope.config = {
                        data: [],
                        columns: [{
                            name: 'id',
                            title: '#'
                        }, {
                            name: 'name',
                            title: 'Название'
                        }, {
                            name: 'driver_name',
                            title: 'Подключенный драйвер'
                        }, {
                            name: 'service_butt',
                            title: 'Услуги',
                            button_name: 'Добавить / редактировать',
                            type: 'buttons',
                            state: 'services'
                        }, {
                            name: 'action_butt',
                            title: 'Действия',
                            button_name: 'Редактирование',
                            type: 'buttons',
                            state: 'receiversediting',
                            buttons: [{
                                type: 'button',
                                value: 'Редактировать',
                                class: 'btn btn-info',
                                sref: 'dashboard.receiversediting'
                            }, {
                                type: 'button',
                                value: 'Удалить',
                                class: 'btn btn-danger',
                                sref: 'receiversediting'
                            }]
                        }]
                    };

                    $scope.config.data = dataList.data;
                },
                resolve: {
                    dataList: function (dataService) {
                        return dataService.getDataAll();
                    }
                }
            })
            .state('dashboard.receiversediting', {

                url: 'receivers/edit/:id',
                template: '<tmpl-form id="id" data="dataList" config="formTmpl" execute="update(data)"></tmpl-form>',
                controller: function ($scope, $stateParams, dataService, dataList) {

                    $scope.id = $stateParams.id;
                    $scope.dataList = dataList.data;

                    $scope.update = function (data) {
                        if ($scope.id) {
                            return dataService.updateData($scope.id, data);
                        } else {
                            return dataService.addNewData(data);
                        }
                    };

                    $scope.formTmpl = {

                        columns: [{
                            name: 'id',
                            title: '#'
                        }, {
                            name: 'name',
                            title: 'Название'
                        }, {
                            name: 'driver_name',
                            title: 'Подключенный драйвер'
                        }, {

                            name: 'contract_type',
                            title: 'Тип договора',

                        }, {
                            name: 'contract_number',
                            title: 'Номер договора'
                        }, {
                            name: 'contract_date',
                            title: 'Дата подписания'
                        }, {
                            name: 'contract_initiator',
                            title: 'ФИО инициатора'
                        }, {
                            name: 'info',
                            title: 'Доп. информация'
                        }, {
                            name: 'disable_product_comission',
                            title: 'Отключить продуктовую комиссию'
                        }],

                        buttons: {
                            name: 'cancel',
                            state: 'dashboard.receivers'
                        }

                    };
                },
                resolve: {
                    dataList: function ($stateParams, dataService) {
                        var id = $stateParams.id;
                        return dataService.getDataById(id);
                    }
                }
            })

    })

module.exports = app;
