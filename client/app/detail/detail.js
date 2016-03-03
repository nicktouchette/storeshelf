'use strict';

angular.module('storeshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/detail',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailCtrl'
      });
  });
