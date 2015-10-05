'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
  });
