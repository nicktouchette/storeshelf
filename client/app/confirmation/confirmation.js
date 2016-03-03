'use strict';

angular.module('storeshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'app/confirmation/confirmation.html',
        controller: 'ConfirmationCtrl'
      });
  });
