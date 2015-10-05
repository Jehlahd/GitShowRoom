'use strict';

/**
 * @ngdoc overview
 * @name showRoomApp
 * @description
 * # showRoomApp
 *
 * Main module of the application.
 */
angular
  .module('showRoomApp', ['ui.router', 'flow', 'satellizer', 'textAngular']);

$(".banner-image-block").imagesLoaded(function(){
  $(".banner-img").addClass("banner-img-animate");
});
