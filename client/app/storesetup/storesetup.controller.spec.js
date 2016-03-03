'use strict';

describe('Controller: StoresetupCtrl', function () {

  // load the controller's module
  beforeEach(module('storeshelfApp'));

  var StoresetupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoresetupCtrl = $controller('StoresetupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
