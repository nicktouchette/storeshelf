'use strict';

(function() {

class DetailCtrl {

  constructor($http, $stateParams, CartService) {
    var vm = this;
    var id = $stateParams.id;

    vm.price = 0;
    vm.product = {};
    vm.cart = {
      count: 1,
      attributes: [],
      product: {}
    };

    vm.decrease = function() {
      if (vm.cart.count > 1) {
        vm.cart.count--;
      }
    };

    vm.increase = function() {
      vm.cart.count++;
    };

    vm.addCart = function(){
      if (vm.selected) {
        vm.cart.product = vm.product;
        vm.cart.attributes.push(vm.selected);
        CartService.addItem(vm.cart);
      }
    };

    $http.get('/api/products/' + id).then(response => {
      vm.product = response.data;
      vm.price = vm.product.price;
    });
  }
}

angular.module('storeshelfApp')
  .controller('DetailCtrl', DetailCtrl);

})();
