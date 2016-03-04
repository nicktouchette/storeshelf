'use strict';

(function() {

class DetailCtrl {

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
        vm.cart.attributes.push(vm.selected._id);
      }
      console.log(vm.cart);
    };

    $http.get('/api/products/' + id).then(response => {
      vm.product = response.data;
      vm.price = vm.product.price;
      console.log(vm.product);
    });
  }
}

angular.module('storeshelfApp')
  .controller('DetailCtrl', DetailCtrl);

})();
