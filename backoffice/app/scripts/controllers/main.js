'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('MainCtrl', function () {
    angular.element(".banner-image-block").imagesLoaded(function(){
      angular.element(".banner-img").addClass("banner-img-animate");
    })
  });
