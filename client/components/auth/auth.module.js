'use strict';

angular.module('storeshelfApp.auth', [
  'storeshelfApp.constants',
  'storeshelfApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
