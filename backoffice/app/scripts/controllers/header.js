'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
  });
