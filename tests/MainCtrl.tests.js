describe("hello", function(){
	it("should work", function (){
		expect(true).toBe(true)
	})
})

describe("MainController", function(){
	beforeEach(module('motivateMeApp'));

	var ctrl, scope;
	// inject the $controller and $rootScope services
	// in the beforeEach block
	beforeEach(inject(function($controller, $rootScope) {
		// Create a new scope that's a child of the $rootScope
	    scope = $rootScope.$new();
	    // Create the controller
	    ctrl = $controller('MainController', {
	      $scope: scope
		});
	}));

	it('should create $scope.tagline when loading page', function() {
    	//ctrl("MainController", {$scope: scope});
		expect(scope.tagline).toEqual("Your Future is created by what you do today not tomorrow");
  	});

  	it('should load todo list when loading page', function() {
		expect(scope.items).toBeDefined();
		expect(scope.items).not.toBeNull();
  	});

  	it('should clear $scope.formTodoText when adding a todo', function() {
  		scope.formTodoText = "Something";
  		scope.addTodo();
		expect(scope.formTodoText).toEqual("");
  	});

  	it('should get the item to update when updating item', function() {
  		scope.updateTodo();
		expect(scope.item).toBeDefined();
  	});
})