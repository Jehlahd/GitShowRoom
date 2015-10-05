'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ProductCtrl', function ($scope, $stateParams, $http, API_URL, alert){
  var id = $stateParams.productId;
  $http.get(API_URL + 'backProduct?productId=' + id)
    .success(function(product){
      $scope.product = product;
    })
    .error(function(err){
      alert('warning', "Unable to get product", err.message);
    });
}

);
