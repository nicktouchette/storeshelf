'use strict';

angular.module('storeshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('storesetup', {
        url: '/storesetup',
        templateUrl: 'app/storesetup/storesetup.html',
        controller: 'StoresetupCtrl'
      });
  });
