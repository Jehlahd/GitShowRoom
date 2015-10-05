'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ArticlesCtrl', function ($scope, $http, API_URL) {
    $http.get(API_URL + 'articles')
      .success(function(articles){
        $scope.articles = articles;
      })
      .error(function(err){
        console.log(err);
      });
  });
