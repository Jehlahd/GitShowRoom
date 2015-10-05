'use strict';

/**
 * @ngdoc function
 * @name showRoomApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the showRoomApp
 */
angular.module('showRoomApp')
  .controller('RegisterCtrl', function ($scope, alert, $auth) {
    $scope.submit = function(){
      $auth.signup({email:$scope.email, password:$scope.password})
        .then(function(res){
          alert('success', 'Account Created', 'Welcome, ' + res.data.user.email);
        })
        .catch(function(err){
          alert('warning', 'Something went wrong :(', err.message);
        });
    };
  });
