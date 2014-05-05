$(function(){
	var todo = document.getElementById('todo');
	var completedTasks = document.getElementById('completed-tasks');
	var clear = document.getElementById('clear');

	// Store the list content
	$('#todo').focusout(function(){
		localStorage.setItem('todo-data', this.innerHTML);
	});

	$('#save-tasks').on('click', function(){
		localStorage.setItem('todo-data', document.getElementById('todo').innerHTML);
	})

	// Restore data into the HTML code
	if (localStorage.getItem('todo-data')){
		todo.innerHTML = localStorage.getItem('todo-data');
		completedTasks.innerHTML = localStorage.getItem('completed-tasks-data');
	}
	// Reset storage
//	$(function(){
	$('#clear-tasks').click(function(){
		localStorage.clear();
		location.reload();
	});

	//Add new task
	$('#add-task').click(function(){
		var $task = $("<li><p contenteditable=\"true\">To do</p></li>");
		var $taskCheckbox = $("<input type=\"checkbox\"/>").on('click', taskCompletion);

		$($taskCheckbox).prependTo($task);
				
		var $taskButton = $("<button type=\"button\" class=\"edit-task\" contenteditable=\"false\">Edit</button>").click(function(){
						$( "#item-dialog" ).dialog();
					});
		$($task).append($taskButton);
				
		$( "#todo" ).append($task);
	});

	/*Open Popup on click on item*/
		$('.edit-task').on('click', function(){
			$( "#item-dialog" ).dialog();
		});

		/* Remove checked task */
		$('input:checkbox').on('click', taskCompletion);
	//});

	
		 function taskCompletion(){
			$(this).parent().detach();
			if ( $(this).is( ":checked" ) ){
				$(this).parent().appendTo("#completed-tasks");
				$(this).attr( "checked", true );
			}
			else{
				$(this).parent().appendTo("#todo");
				$(this).attr( "checked", false );	
			}
			
			localStorage.setItem('completed-tasks-data', completedTasks.innerHTML);
			localStorage.setItem('todo-data', todo.innerHTML);
		};
	

});