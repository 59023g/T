'use strict';

angular.module('tint', [
  //'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'doController'
      })
      .when('/learn', {
        templateUrl: 'partials/learn',
        controller: 'doController'
      })
      .otherwise({
        redirectTo: '/'
      });


  });


