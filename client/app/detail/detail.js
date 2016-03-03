'use strict';

angular.module('storeshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/detail/:id',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'vm',
        params: { id: null }
      });
  });
