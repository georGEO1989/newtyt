'use strict';

/**
 * @ngdoc function
 * @name newtytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newtytApp
 */
angular.module('newtytApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
