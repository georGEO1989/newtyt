'use strict';
angular.module('newtytApp', [])

.controller('MainCtrl', function($scope) {

  // bound to the current slider index
  $scope.currentSliderIndex = 0;

  // the image sources for the slides
  $scope.images = [
    'http://distilleryimage9.ak.instagram.com/6113581809eb11e39e3522000a9f18ab_7.jpg',
    'http://distilleryimage4.ak.instagram.com/e27029bc1d4211e3852e22000ae90903_7.jpg',
    'http://distilleryimage3.ak.instagram.com/67345d703be411e3b3da22000aa804fa_8.jpg'
  ];

});