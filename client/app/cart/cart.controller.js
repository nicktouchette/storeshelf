'use strict';

(function() {

class CartCtrl {

  constructor($http, CartService) {
    var vm = this;

    vm.cart = CartService.cart;
    vm.total = CartService.updateSum();
    vm.activeCart = CartService.hasItem;

    vm.removeFromCart = function(index) {
      CartService.removeItem(index);
      vm.total = CartService.updateSum();
    };

    vm.decrease = function(index) {
      if (vm.cart[index].count > 1) {
        vm.cart[index].count--;
      }
      CartService.updateItem(index);
      vm.total = CartService.updateSum();
    };

    vm.increase = function(index) {
      vm.cart[index].count++;
      CartService.updateItem(index);
      vm.total = CartService.updateSum();
    };

    vm.updateChange = function(index) {
      CartService.updateItem(index);
      vm.total = CartService.updateSum();
    };
  }
}

angular.module('storeshelfApp')
  .controller('CartCtrl', CartCtrl);

})();
