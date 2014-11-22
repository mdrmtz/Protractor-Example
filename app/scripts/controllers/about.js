'use strict';

/**
 * @ngdoc function
 * @name svpmodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the svpmodApp
 */
angular.module('svpmodApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
