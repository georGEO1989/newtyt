'use strict';

/**
 * @ngdoc function
 * @name newtytApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newtytApp
 */
angular.module('newtytApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
