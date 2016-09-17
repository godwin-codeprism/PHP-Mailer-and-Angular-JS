var appHtml = require('../views/app.html');
var formHtml = require('../views/form.html');
angular.module('phpMails', ['ngSanitize', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: appHtml,
                controller: 'mainController'
            })
            .state('home.form', {
                url: 'form',
                template: formHtml
            })
    }])