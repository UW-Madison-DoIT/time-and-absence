'use strict';

define(['angular', 'jquery'], function(angular, $) {
    return angular.module('view-home.controllers ', [])

    .controller('LeaveBalanceController', 
        ['$scope', 'hrsService',
        function($scope, hrsService){

            var getLeaveBalances = function(){
                var leaveBalances=hrsService.getLeaveBalances().success(function(){
                    $scope.leaveBalances = leaveBalances;
                }).error(function(){
                    $scope.leaveBalances='Error';
                });
            };
        }
    ]);
});
