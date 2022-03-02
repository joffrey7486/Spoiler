
var elements = document.querySelectorAll('.spoiler')
var createSpoilerButton = function(element) {
	
	//crée la span
	var span = document.createElement('span')
	span.className = 'spoiler-content'
	span.innerHTML = element.innerHTML

	//crée le buton
	var button = document.createElement('button')
	button.textContent = "Afficher le spoiler"

	//ajoute les élément au DOM
	element.innerHTML = ''
	element.appendChild(button)
	element.appendChild(span)

	//On met l'écouteur d'évènement au click
	button.addEventListener("click", function() {
		button.parentNode.removeChild(button)
		span.classList.add("visible")
	})
}


for( var i = 0; i < elements.length; i++){
	createSpoilerButton(elements[i])
}