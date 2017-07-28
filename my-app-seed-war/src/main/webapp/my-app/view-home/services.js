'use strict';

define(['angular', 'jquery'], function(angular, $) {
  return angular.module('my-app.view-home.services', [])
  .factory('hrsService', [
    '$http',
    function($http) {

      var getLeaveBalances = function () {
        return $http.get('/staticFeeds/leaveBalances.json', { cache: true })
          .then(function (result) {
            return result.data;
          },
          function (reason) {
            //TBD
          }
          );
      };

    return {
      getLeaveBalances: getLeaveBalances,
    };
  }]);
});
