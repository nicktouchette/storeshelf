'use strict';

(function() {

class CartCtrl {

  constructor($http, $stateParams) {
    var vm = this;
    var id = $stateParams.id;

    vm.price = 0;
    vm.product = {};
    vm.cart = {
      count: 1,
      attributes: [],
      ref: id
    };
  }
}

angular.module('storeshelfApp')
  .controller('CartCtrl', CartCtrl);

})();
