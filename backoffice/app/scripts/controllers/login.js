'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('LoginCtrl', function ($scope, $auth, alert, $state) {
    $scope.submit = function(){

      $auth.login({email:$scope.email, password:$scope.password})
        .then(function(res){
          var message = 'Thanks for coming back ' + res.data.user.email + '!';
          alert('success', 'Welcome', message);
          $state.go('main');
        })
        .catch(handleError);
    };

    function handleError(err){
      alert('warning', 'Something went wrong :(', err.message);
    }
  });
