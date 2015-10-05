'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('ArticleCtrl', function ($scope, $stateParams, $http, API_URL, alert, $state){
    var id = $stateParams.articleId;
    $scope.edition = true;
    $http.get(API_URL + 'backArticle?articleId=' + id)
      .success(function(article){
        $scope.article = article;
        $scope.titre = article.title;
        $scope.desc = article.m_desc;
        $scope.bodyModel = article.desc;
      })
      .error(function(err){
        alert('warning', "Unable to get article", err.message);
      });

    $scope.toogleEdition = function(){
      $scope.edition = !$scope.edition;
    };

    $scope.deleteArticle = function(){
      $http.delete(API_URL + 'backArticle?articleId=' + id)
        .success(function(res){
          res;
          alert('success', "Article Deleted ", ":D");
          $state.go("articles");
        })
        .error(function(err){
          alert('danger', "Unable to delete article", err.message);
        });
    };

    $scope.updateArticle = function(){
      var msg = {
        title: $scope.titre,
        m_desc: $scope.desc,
        desc: $scope.bodyModel,
        id: $scope.article._id
      };
      $http.put(API_URL + 'backArticle' ,msg)
        .then(function(response){
          response;
          alert('success', "Success: ", "Article updated");
          $state.go("articles");
        },function(response){
          response;
          $state.go("articles");
          alert('danger', "Error: ", "Unable to update article");
        });
    };
  });
