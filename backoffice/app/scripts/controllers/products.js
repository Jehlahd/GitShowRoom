'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ProductsCtrl', function ($scope, $http, API_URL, alert) {
    $http.get(API_URL + 'backProducts')
      .success(function(products){
        $scope.products = products;
      })
      .error(function(err){
        alert('warning', "Unable to get products", err.message);
      });
  });
