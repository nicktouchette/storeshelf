'use strict';

angular.module('storeshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addproduct', {
        url: '/addproduct',
        templateUrl: 'app/addproduct/addproduct.html',
        controller: 'AddproductCtrl'
      });
  });
