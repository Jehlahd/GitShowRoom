'use strict';

/**
 * @ngdoc directive
 * @name showRoomApp.directive:searchDirective
 * @description
 * # searchDirective
 */
angular.module('showRoomApp')
  .directive('searchDirective', function () {
    return {
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModelCtrl, $rootScope) {
        ngModelCtrl.$parsers.push(function (viewValue) {
          // The $viewValue has changed. Let's just log it
          // and pass it on unaffected...
          console.log(viewValue);
          $rootScope.searchQuery = viewValue;
          return viewValue;
        });
      }
    };
  });
