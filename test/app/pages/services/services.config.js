/**
 * dashboard Module
 *
 * Description
 */
var app = angular.module('dashboard.services')

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('dashboard.services', {
            url: 'receivers/:id/services/',
            template: '<big-table content="config" id="id"></big-table>',
            controller: function ($scope, $stateParams, dataList) {
                console.log($scope);
                $scope.id = $stateParams.id;

                $scope.config = {
                    data: [],
                    columns: [{
                            name: 'id',
                            title: '#'
                        }, {
                            name: 'status',
                            title: 'Статус'
                        }, {
                            name: 'name',
                            title: 'Название'
                        }, {
                            name: 'driver_name',
                            title: 'Подключенный драйвер'
                        }, {
                            name: 'action_butt',
                            title: 'Действия',
                            button_name: 'Редактировать',
                            type: 'buttons',
                            state: 'servicesediting'
                        }

                    ]
                };
                $scope.config.data = dataList.data;
            },
            resolve: {
                dataList: function (Services) {
                    return Services.getDataAll();
                }
            }
        })
        .state('dashboard.servicesediting', {
            url: 'edit/:id',
            template: '<tmpl-form id="id" config="formTmpl"></tmpl-form>',
            controller: function ($scope, $stateParams) {

                $scope.formTmpl = {
                    data: {
                        contract_initiator: "",
                        contract_number: "",
                        contract_type: "",
                        driver_name: "",
                        id: "",
                        name: ""
                    },
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
                        state: 'dashboard.servicesediting'
                    }

                };

            },
            resolve: {
                // dataList: function($stateParams, Services){
                // 	var id = $stateParams.id;
                // 	return Services.
                // }
            }
        })
})


module.exports = app;
