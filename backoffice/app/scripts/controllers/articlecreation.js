'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ArticlecreationCtrl
 * @description
 * # ArticlecreationCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ArticlecreationCtrl', function ($scope, $http, $auth, API_URL, $state, alert) {
    $scope.isAuthenticated = $auth.isAuthenticated;
    $scope.addArticle = function(){
      var msg = {
        title: $scope.titre,
        desc: $scope.desc,
        body: $scope.bodyModel
      };
      $http.post(API_URL + 'backArticle' ,msg)
        .then(function(response){
          response;
          $state.go("articles");
        },function(response){
          $state.go("articles");
          alert('danger', "Error: ", response.data.message);
        });

    };
  });
