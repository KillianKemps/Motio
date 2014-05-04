$(function(){
	var todo = document.getElementById('todo');
	var clear = document.getElementById('clear');

	// Store the list content
	$('#todo').blur(function(){
		localStorage.setItem('data', this.innerHTML);
	});

	// Restore data into the HTML code
	if (localStorage.getItem('data')){
		todo.innerHTML = localStorage.getItem('data');
	}
	// Reset storage
//	$(function(){
		$('#clear-tasks').click(function(){
			localStorage.clear();
			location.reload();
		});

		//Add new task
		$('#add-task').click(function(){
			var $task = $("<li><input type=\"checkbox\"/> <p contenteditable=\"true\">To do</p></li>")
				.append($("<button type=\"button\" id=\"edit-task\" contenteditable=\"false\">Edit</button>")
					.click(function(){
							$( "#item-dialog" ).dialog();
						}));
			$( "#todo" ).append($task);
		});

		/*Open Popup on click on item*/
		$('#edit-task').on('click', function(){

			$( "#item-dialog" ).dialog();

		});
	//});

	

	

});