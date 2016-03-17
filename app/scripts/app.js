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
    'ngRoute',
    'ui.router',
    'pdf'
  ])
  .config(function ($routeProvider,$stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('pro', {
        url: '/construct',
        templateUrl: 'views/construct.html',
        controller: 'CvCtrl',
        controllerAs: 'cv'
      })
      .state('cv', {
        url: '/cv',
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl',
        controllerAs: 'cv'
      })
      .state('lien',{
        url: '/lien',
        templateUrl: 'views/lien.html'
      });
  });
