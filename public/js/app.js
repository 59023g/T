'use strict';

var tint = angular.module('tint', [
  //'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider
      .when('/process', {
        templateUrl: 'partials/two',
        controller: 'doController',
        css: 'css/slide2.css'
      })
      .when('/process', {
        templateUrl: 'partials/two',
        controller: 'doController',
        //animate: 'slideLeft',
        css: 'css/slide2.css'
      }) 
      .when('/build', {
        templateUrl: 'partials/three',
        controller: 'doController',
        //animate: 'slideLeft',
        css: 'css/slide2.css'
      })  
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'doController',
      })
      .when('/learn', {
        templateUrl: 'partials/learn',
        controller: 'doController',
        css: 'css/learn.css'
      })
      .when('/pricing', {
        templateUrl: 'partials/pricing',
        controller: 'doController',
        css: 'css/learn.css'
        //animate: 'slideLeft'
      })          
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true)

  });
