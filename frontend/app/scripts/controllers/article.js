'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ArticleCtrl', function ($scope, $stateParams, $http, API_URL){
    var id = $stateParams.articleId;
    $http.get(API_URL + 'article?articleId=' + id)
      .success(function(article){
        $scope.article = article;
      })
      .error(function(err){
        console.log(err);
      });
  }

  );
