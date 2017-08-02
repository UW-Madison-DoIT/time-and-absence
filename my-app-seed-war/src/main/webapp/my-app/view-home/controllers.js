'use strict';

define(['angular', 'jquery'], function(angular, $) {

    var app = angular.module('my-app.view-home.controllers', [])

    .controller('LeaveBalanceController',
    ['$scope','hrsService', 'NAMES',
    function($scope, hrsService, NAMES){
        $scope.helpLink= NAMES.title;
        $scope.balances = [];
        hrsService.getLeaveBalances().then(
            function(balances) {
                if (balances) {
                    $scope.balances = balances.balances;
                    $scope.showTitle = "false";
                    var flags = [], output = [], l = balances.balances.length, i;
                    for( i=0; i<l; i++) {
                        if( flags[balances.balances[i].title]) continue;
                        flags[balances.balances[i].title] = true;
                        output.push(balances.balances[i].title);
                    }
                    if(output.length >1){
                        $scope.showTitle="true";
                    }
                    
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