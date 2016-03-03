'use strict';

describe('Controller: AddproductCtrl', function () {

  // load the controller's module
  beforeEach(module('storeshelfApp'));

  var AddproductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddproductCtrl = $controller('AddproductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
