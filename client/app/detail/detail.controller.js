'use strict';

(function() {

class DetailCtrl {

  constructor($http, $stateParams) {
    var vm = this;
    this.$http = $http;
    var id = $stateParams.id;
    vm.product = {};

    $http.get('/api/products/' + id).then(response => {
      vm.product = response.data;
    });
  }
}

angular.module('storeshelfApp')
  .controller('DetailCtrl', DetailCtrl);

})();
