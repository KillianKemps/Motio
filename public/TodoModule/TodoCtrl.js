angular.module('todoModule', []).controller('TodoController', ['$scope','Todo', 'Login', function($scope, Todo, Login) {

	$scope.tagline = 'Your Future is created by what you do today not tomorrow';	

	// getting user data from the service
  	$scope.user = Login.getData();

	//query() returns all the entries
	$scope.items = Todo.query({userId: $scope.user._id}); 

	$scope.addTodo = function(){
		var item = new Todo({
			owner: $scope.user._id,
			text: $scope.formTodoText,
			priority: $scope.formTodoPriority || 0,
			dueDate: $scope.formTodoDueDate,
			done: false
		});

		Todo.save({userId: $scope.user._id}, item, function (response) {
			// store this item who now got a mongo id
			$scope.items.push(response);
		});
		
		$scope.formTodoText = '';
	}

	$scope.updateTodo = function(_id, element, update, angularId){
		$scope.item = Todo.get({ userId: $scope.user._id, todoId: _id }, function() {
			// $scope.item is fetched from server and is an instance of Todo
			if(element == 'done'){
				$scope.item.done = update;

				$scope.item.$update({userId: $scope.user._id}, function(response) {
				});
				// if the task is completed then delete
				if(update == true)
				{
					$scope.removeTodo($scope.item, angularId);
				}
			}
			else if(element == 'priority'){
				$scope.item.priority = update;
				// refresh the view
				$scope.items[angularId].priority = update;
				console.log(update);
				$scope.item.$update({userId: $scope.user._id}, function(response) {
				});
			}
			else if(element == 'dueDate'){
				$scope.item.dueDate = update;
				console.log(update);
				$scope.item.$update({userId: $scope.user._id}, function(response) {
				});
			}
			else{
				console.log("Error: No such update");
			}
			
		});	
	}

	$scope.removeTodo = function(item, id){
		// remove item from database
		item.$remove({userId: $scope.user._id}, function() {
		});
		// remove item from view
		$scope.items.splice(id, 1)
	}

	/****************/
	/** DatePicker **/
	/****************/

	$scope.today = function() {
		$scope.dt = new Date();
	};
		$scope.today();

	$scope.clear = function () {
		$scope.dt = null;
	};

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	};
	
	$scope.toggleMin();
	$scope.opened = [];

	$scope.open = function($event, id) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened[id] = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.initDate = new Date('2016-15-20');
	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];

	$scope.formTodoDatepickerOpen = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.formTodoOpened = true;
	};

	/****************/
	/** Dropdown   **/
	/****************/

  	$scope.status = {
		isopen: []
	};

	$scope.toggled = function(open) {
		console.log('Dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event, id) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen[id] = !$scope.status.isopen[id];
	};

	$scope.addPriority = function(priorityLevel){
		$scope.formTodoPriority = priorityLevel;
	};

}]);

