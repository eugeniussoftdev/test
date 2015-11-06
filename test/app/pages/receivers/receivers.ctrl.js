// /**
//  * dashboard.receivers Module
//  *
//  * Description
//  */
// var app = angular.module('dashboard.receivers')

// .controller('receiversCtrl', function ($scope, dataService, dataList) {

//     $scope.DataService = dataService;
//     var dataList = dataList.data;


//     var receiversCtrl = {

//         table: {
//             data: [],
//             columns: [{
//                     name: 'id',
//                     title: '#'
//                 }, {
//                     name: 'name',
//                     title: 'Название'
//                 }, {
//                     name: 'driver_name',
//                     title: 'Подключенный драйвер'
//                 }, {
//                     name: 'service_butt',
//                     title: 'Услуги',
//                     button_name: 'Добавить / редактировать',
//                     type: 'buttons',
//                     state: 'services'
//                 }, {
//                     name: 'action_butt',
//                     title: 'Действия',
//                     button_name: 'Х',
//                     type: 'buttons',
//                     state: 'input',
//                     buttons: [{
//                         action: 'edit'
//                     }, {
//                         action: 'delete'
//                     }]
//                 }

//             ]
//         },
//         inputForm: {
//             data: [],
//             columns: [{
//                     name: 'id',
//                     title: '#'
//                 }, {
//                     name: 'name',
//                     title: 'Название'
//                 }, {
//                     name: 'driver_name',
//                     title: 'Подключенный драйвер'
//                 }, {

//                     name: 'contract_type',
//                     title: 'Тип договора',

//                 }, {
//                     name: 'contract_number',
//                     title: 'Номер договора'
//                 }, {
//                     name: 'contract_date',
//                     title: 'Дата подписания'
//                 }, {
//                     name: 'contract_initiator',
//                     title: 'ФИО инициатора'
//                 }, {
//                     name: 'info',
//                     title: 'Доп. информация'
//                 }, {
//                     name: 'disable_product_comission',
//                     title: 'Отключить продуктовую комиссию'
//                 }
//                 // , {
//                 //     name: 'service_butt',
//                 //     title: 'Услуги',
//                 //     button_name: 'Добавить / редактирова',
//                 //     type: 'buttons',
//                 // }, {
//                 //     name: 'action_butt',
//                 //     title: 'Действия',
//                 //     button_name: 'Добавить / редактирова',
//                 //     type: 'buttons',
//                 //     buttons: [{
//                 //         action: 'edit'
//                 //     }, {
//                 //         action: 'delete'
//                 //     }]
//                 // }

//             ]
//         }
//     };

//     receiversCtrl.table.data = $scope.DataService.mixData(receiversCtrl.table.columns, dataList);

//     $scope.receiversCtrl = receiversCtrl;

// })

// module.exports = app;
