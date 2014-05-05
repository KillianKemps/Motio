$(function(){
	var todo = $('#todo');
	var completedTasks = $('#completed-tasks');
	var clear = $('#clear');
	var data = [];	

	// Store the list content
	$('#todo').focusout(function(){
		localStorage.setItem('todo-data', this.html);
	});

	$('#save-tasks').on('click', function(){
		for (var i = 0; i < $('#todo li').length; i++) {
			data[i] = {};
			data[i].text = $('#todo li').eq(i).children('p').html();
			data[i].date = $('#todo li').eq(i).children('.hasDatepicker').val();
		};
		localStorage.setItem('todo-data', JSON.stringify(data));
	})

	// Restore data into the HTML code
	if (localStorage.getItem('todo-data')){
		var donnee = JSON.parse( localStorage.getItem('todo-data'));
		for (var i = 0; i < donnee.length; i++){
			todo.append('<li><input type="checkbox"/> <p contenteditable="true">'+ donnee[i].text +'</p><button type="button" class="edit-task" contenteditable="false">Edit</button><input type="text" class="task-date" value="'+ donnee[i].date +'" /></li>');
		}
		completedTasks.html = localStorage.getItem('completed-tasks-data');
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

		var $taskDate = $('<input type="text" class="task-date"/>').datepicker();
		$($task).append($taskDate);

		$( "#todo" ).append($task);
	});

	/*Open Popup on click on item*/
	$('.edit-task').on('click', function(){
		var $currentTask = $(this).parent();
		$( "#item-dialog" ).dialog();

		$('#dialog-validate').on('click', function(){
			$( "#item-dialog" ).dialog("close");
		});
	});


	/* Move checked and unchecked tasks */
	$('input:checkbox').on('click', taskCompletion);

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
		
		localStorage.setItem('completed-tasks-data', completedTasks.html);
		localStorage.setItem('todo-data', todo.html);
	};

	/* Create a datepicker */
	$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );		
	$( ".task-date" ).datepicker();

		
		
});