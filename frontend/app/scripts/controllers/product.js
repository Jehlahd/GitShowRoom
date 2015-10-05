'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ProductCtrl', function ($scope, $stateParams, $http, API_URL){
  var id = $stateParams.productId;
  $http.get(API_URL + 'product?productId=' + id)
    .success(function(product){
      $scope.product = product;
      console.log("test " +product);
    })
    .error(function(err){
      console.log(err);
    });
}

);
