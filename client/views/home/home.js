(function(){
  'use strict';

  angular.module('capstone')
  .controller('HomeCtrl', ['$scope', '$location', function($scope, $location){

    $scope.newGamePage = function(){
      $location.path('/newgame');
    };

  }]);
})();

