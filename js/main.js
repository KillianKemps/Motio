$(function(){
	var todo = document.getElementById('todo');
	var clear = document.getElementById('clear');

	// Stocker le contenu de la liste
	$('#todo').blur(function(){
		localStorage.setItem('data', this.innerHTML);
	});



	// Restaure le contenu dans le code HTML
	if (localStorage.getItem('data')){
		todo.innerHTML = localStorage.getItem('data');
	}
	// Réinitialiser l'espace de stockage
	$(function(){
		$('#clear').click(function(){
			localStorage.clear();
			location.reload();
		});
	});

	// Ajout de classes de personnalisation
	function couleur (){
		$("li:contains('!')").addClass('prioritaire');
		$("li:contains('ok')").addClass('fait');
		$("li:not(:contains('!'))").removeClass('prioritaire');
		$("li:not(:contains('ok'))").removeClass('fait');
	};
	
	$('#todo').keyup(function (){
		couleur();
	})

});