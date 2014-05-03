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
	$(function(){
		$('#clear').click(function(){
			localStorage.clear();
			location.reload();
		});
	});

	// Add personnalisation class
	function couleur (){
		$("li:contains('!')").addClass('prioritaire');
		$("li:contains('ok')").addClass('fait');
		$("li:not(:contains('!'))").removeClass('prioritaire');
		$("li:not(:contains('ok'))").removeClass('fait');
	};
	
	$('#todo').keyup(function (){
		couleur();
	})

	/*Open Popup on click on item*/
	$('li').click('on', function(){

		$( "#itemDialog" ).dialog();

	})

});