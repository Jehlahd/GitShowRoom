'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ArticlesCtrl', function ($scope, $http, API_URL, alert, $state, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
    $http.get(API_URL + 'backArticles')
      .success(function(articles){
        $scope.articles = articles;
      })
      .error(function(err){
        alert('warning', "Unable to get articles", err.message);
      });
  });
