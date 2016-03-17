'use strict';

/**
 * @ngdoc overview
 * @name sitePersoAng15App
 * @description
 * # sitePersoAng15App
 *
 * Main module of the application.
 */
angular
  .module('sitePersoAng15App', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
