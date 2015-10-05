'use strict';

/**
 * @ngdoc service
 * @name jwtApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the jwtApp.
 */
angular.module('showRoomApp').factory('authInterceptor', function(authToken) {
    return {
      request: function(config) {
        var token = authToken.getToken();
        if (token)
        {
          console.log("token " + token );
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      response: function(response)
      {
        return response;
      }
    };
  });
