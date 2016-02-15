'use strict';

angular.module('testApp').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'mainCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl:'/html/register.html',
      controller: 'registerCtrl'
    })
    .state('login', {
      url:'/login',
      templateUrl:'/html/login.html',
      controller:'loginCtrl'
    })
    .state('main', {
      url:'/main',
      templateUrl:'/html/main.html',
      controller:'mainCtrl'
    })
  $urlRouterProvider.otherwise('/');
});
