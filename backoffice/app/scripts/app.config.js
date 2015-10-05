'use strict';
/**
 * Created by Vincent on 20/08/2015.
 */
angular.module('showRoomApp')
  .constant('API_URL', 'http://localhost:3000/')
  .config(function($urlRouterProvider, $stateProvider, $httpProvider, $authProvider, API_URL) {

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
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller:'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    })
    .state('articleCreation', {
      url: '/addArticle',
      templateUrl: '/views/ArticleCreation.html',
      controller: 'ArticlecreationCtrl'
    })
  ;
  $authProvider.loginUrl = API_URL + "login";
  $authProvider.signupUrl = API_URL + "register";
  $httpProvider.interceptors.push('authInterceptor');
});

