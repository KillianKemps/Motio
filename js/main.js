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

		$('#add-task').click(function(){
			console.log('it works');
			$( "#todo" ).append( "<li><input type=\"checkbox\"/> To do<button type=\"button\" id=\"edit-task\" contenteditable=\"false\">Edit</button></li>" );
		});

		/*Open Popup on click on item*/
		$('#edit-task').click(function(){

			$( "#item-dialog" ).dialog();

		});
	//});

	

	

});