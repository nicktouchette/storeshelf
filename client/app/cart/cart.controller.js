'use strict';

(function() {

class CartCtrl {

  constructor($http, CartService) {
    var vm = this;

    vm.cart = CartService.cart;

    vm.removeFromCart = function(index) {
      CartService.removeItem(index);
    };

  }
}

angular.module('storeshelfApp')
  .controller('CartCtrl', CartCtrl);

})();
