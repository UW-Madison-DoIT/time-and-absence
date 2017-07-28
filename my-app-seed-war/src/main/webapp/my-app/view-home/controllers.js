'use strict';

define(['angular', 'jquery'], function(angular, $) {

    var app = angular.module('my-app.view-home.controllers', [])

    .controller('LeaveBalanceController',
    ['$scope','hrsService',
    function($scope, hrsService){
       var data = hrsService.getLeaveBalances();
    }])
});
