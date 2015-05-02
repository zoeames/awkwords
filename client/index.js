(function(){
  'use strict';

  angular.module('capstone', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/about', {templateUrl:'/views/about/about.html', controller:'AboutCtrl'})
    .when('/game',    {templateUrl:'/views/game/game.html',       controller:'GameCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'capstone', storeName:'cache', version:1.0});
  }]);
})();

