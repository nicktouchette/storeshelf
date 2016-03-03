'use strict';

(function() {

class SearchCtrl {

  constructor($http, $scope) {
    this.$http = $http;
    this.products = [];

    $http.get('/api/products').then(response => {
      this.products = response.data;

    });

    $scope.$on('$destroy', function() {

    });
  }

  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }
}

angular.module('storeshelfApp')
  .controller('SearchCtrl', SearchCtrl);

})();
