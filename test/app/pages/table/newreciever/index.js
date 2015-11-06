/**
 * dashboard.table.add Module
 *
 * Description
 */
angular.module('dashboard.table.add', [])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dashboard.add', {
            url: 'add',
            template: ' <tmpl-form></tmpl-form>',
            controller: 'testCtrl'
        })
})


// module.exports = app;
