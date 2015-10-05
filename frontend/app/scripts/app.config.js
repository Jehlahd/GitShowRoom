'use strict';
/**
 * Created by Vincent on 20/08/2015.
 */

angular.module('showRoomApp').config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: '/views/main.html',
      controller: "MainCtrl"
    })
    .state('contact',{
      url:'/contact',
      templateUrl:'/views/contact.html'
    })
    .state('articles',{
      url:'/articles',
      templateUrl:'/views/articles.html',
      controller: "ArticlesCtrl"
    })
    .state('products',{
      url:'/products',
      templateUrl:'/views/products.html',
      controller: "ProductsCtrl"
    })
    .state('article',{
      url:'/article?articleId',
      templateUrl:'/views/article.html',
      controller: "ArticleCtrl"
    })
    .state('product',{
      url:'/product?productId',
      templateUrl:'/views/product.html',
      controller: "ProductCtrl"
    });
})
  .constant('API_URL', 'http://localhost:3000/');
