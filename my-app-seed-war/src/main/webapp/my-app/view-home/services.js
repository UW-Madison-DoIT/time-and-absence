'use strict';

define(['angular', 'jquery'], function(angular, $) {
  return angular.module('my-app.view-home.services', [])
  .factory('hrsService', [
    '$http',
    function($http) {

      var getLeaveBalances = function () {
        return $http.get('http://localhost:8080/my-app/view-home/resources/staticFeeds/leaveBalances.json', { cache: true })
          .then(function (result) {
            return result.data;
          },
          function (reason) {
            return null;
          }
          );
      };

    return {
      getLeaveBalances: getLeaveBalances
    };
  }]);
});
