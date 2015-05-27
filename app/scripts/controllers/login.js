'use strict';

angular.module('newtytApp')
	.controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
		/*
		$scope.awesomeThings = [
	        'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
		];
		*/
		$scope.credentials = {
			username: '',
			password: ''
		};
		$scope.login = function (credentials) {
			AuthService.login(credentials).then(function (user) {
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				$scope.setCurrentUser(user);
			}, function () {
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			});
		}
		.constant('AUTH_EVENTS', {
			loginSuccess: 'auth-login-success',
			loginFailed: 'auth-login-failed',
			logoutSuccess: 'auth-logout-success',
			sessionTimeout: 'auth-session-timeout',
			notAuthenticated: 'auth-not-authenticated',
			notAuthorized: 'auth-not-authorized'
		});
	});