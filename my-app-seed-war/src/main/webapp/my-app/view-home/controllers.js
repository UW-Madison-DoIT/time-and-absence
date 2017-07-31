'use strict';

define(['angular', 'jquery'], function(angular, $) {

    var app = angular.module('my-app.view-home.controllers', [])

    .controller('LeaveBalanceController',
    ['$scope','hrsService',
    function($scope, hrsService){
        $scope.greeting = "Hola!";
        $scope.balances = [];
        hrsService.getLeaveBalances().then(
            function(balances) {
                if (balances) {
                    $scope.balances = balances.balances;
                }
                return balances;
            }
        )
    }])
});
/*--
'use strict';

define(['angular', 'jquery'], function (angular, $) {
    return angular.module('view-home.controllers ', [])
        .controller('LeaveBalanceController', [
            '$scope', 'hrsService',
            function ($scope, hrsService) {

                var init = function () {
                    $scope.greeting="Bonjour";
                    $scope.loading = true;
                    hrsService.getLeaveBalances().then(
                        function (result) {
                            if (!result) {
                                $scope.error = true;
                                $scope.leaveBalances = "{}";
                            } else {
                                $scope.error = false;
                                $scope.balances = result.data;
                            };
                        });
                };

                init();
            }])
});
*/