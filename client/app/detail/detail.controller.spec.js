'use strict';

describe('Controller: DetailCtrl', function () {

  // load the controller's module
  beforeEach(module('storeshelfApp'));

  var DetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailCtrl = $controller('DetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
