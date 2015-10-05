'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ProductsCtrl', function ($scope, $http, API_URL) {
    $http.get(API_URL + 'products')
      .success(function(products){
        $scope.products = products;
      })
      .error(function(err){
        console.log(err);
      });
  });
