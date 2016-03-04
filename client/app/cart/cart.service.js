'use strict';

(function() {

class CartService {

  constructor($http) {
    var vm = this;
    vm.cart = [];

    var ss = sessionStorage.getItem('storeshelfcart');
    if (ss) {
      var parsedSession = JSON.parse(ss);
      vm.cart = parsedSession;
    }

    // function findItemById(items, id) {
    //   return _.find(items, function(item) {
    //     return item.id === id;
    //   });
    // }

    vm.addItem = function(item) {
      vm.cart.push(item);
      var ss = sessionStorage.getItem('storeshelfcart');
      if (ss) {
        ss = JSON.parse(ss);
        ss.push(item);
        sessionStorage.setItem('storeshelfcart', JSON.stringify(ss));
      } else {
        sessionStorage.setItem('storeshelfcart', JSON.stringify(vm.cart));
      }
    };

    vm.removeItem = function(index) {
      vm.cart.splice(index, 1);
      var ss = sessionStorage.getItem('storeshelfcart');
      if (ss) {
        ss = JSON.parse(ss);
        ss.splice(index, 1);
        sessionStorage.setItem('storeshelfcart', JSON.stringify(ss));
      }
    };

    vm.updateItem = function(index) {
      var ss = sessionStorage.getItem('storeshelfcart');
      if (ss) {
        ss = JSON.parse(ss);
        ss[index] = vm.cart[index];
        sessionStorage.setItem('storeshelfcart', JSON.stringify(ss));
      }
    };

    vm.updateSum = function() {
      return vm.cart.reduce(function(total, item) {
        return total + ((item.product.price + item.attributes[0].price) * item.count);
      }, 0);
    };
      // if (item.qty > 0) {

      //   var found = findItemById(vm.cart, item.id);
      //   if (found) {
      //     found.qty += 1;
      //     item.qty -= 1;
      //   }
      //   else {
      //     var itemCopy = angular.copy(item);
      //     itemCopy.qty = 1;
      //     vm.cart.push(itemCopy);
      //     item.qty -= 1;
      //   }
      // }


    // vm.removeItem = function(item) {
    //   var index = vm.cart.indexOf(item);
    //   var inventoryItem = ItemService.findItemById(item.id);
    //   if (vm.cart[index].qty > 1) {
    //     inventoryItem.qty += 1;
    //     vm.cart[index].qty -= 1;
    //   } else {
    //     inventoryItem.qty += 1;
    //     vm.cart[index].qty -= 1;
    //     vm.cart.splice(index, 1);
    //   }
    // };

    vm.getCost = function(item) {
      return item.qty * item.price;
    };

    vm.getTotal = function() {
      return _.reduce(vm.cart, function(sum, item) {
        return sum + vm.getCost(item);
      }, 0);
    };

    // vm.clearCart = function() {
    //   while(vm.cart.length > 0) {
    //     var item = vm.cart[vm.cart.length - 1];
    //     var inventoryItem = ItemService.findItemById(item.id);
    //     inventoryItem.qty += item.qty;
    //     vm.cart.pop();
    //   }
    // };
  }
}

angular.module('storeshelfApp')
  .service('CartService', CartService);

})();
