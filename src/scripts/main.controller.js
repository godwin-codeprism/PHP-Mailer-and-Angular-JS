angular.module('phpMails')
    .controller('mainController', ['$scope', function ($scope) {
        $scope.submit = function(){
            console.log('success');
        }
    }])