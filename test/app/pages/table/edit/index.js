/**
 * dashboard.table.edit Modul
 *
 * Description
 */
angular.module('dashboard.table.edit', [])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dashboard.edit', {
            url: 'edit',
            template: ' <tmpl-form content=""></tmpl-form>',
            // template: '<input-tmpl data="item"></input-tmpl>',
            controller: 'testCtrl'
        })
})
