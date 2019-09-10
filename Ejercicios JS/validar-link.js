let links = document.querySelectorAll("nav a")

console.log(links)

links.forEach(function(link){
	//Aca voy a manipularlLink el link..
	console.log (link)

	link.onclick = function (evento){
		console.log (evento)
		evento.preventDefault()//<-- Frenar el comportamiento predeterminado del link/hipervinculo

		console.log("El culpable de este suceso es:")
		console.log(evento.target)//<-- es "él" elemento a traves del cual se provoca el evento

		let url = evento.target.href //<-- manipulación de estructura atributo en js son propiedad

		let rta = confirm(`Esta seguro que desea ir a ${evento.target.innerText}`)

		if (rta) {
			alert (" Bueno ..chau")
			console.log("Hay que ir aca:" + url)
			window.location.href = url
			
		}
	}
})

/*links.forEach( manipularLink )//<--"Hacer esto...." por cada link hacer esto. Se va a ejecutar tantas veces como coleecion de datos habia*/


/*function manipularLink (link){
	//Aca voy a manipularlLink el link..
	console.log (link)

	link.onclick = validar
} 
*/


/*function validar (evento){
	console.log (evento)
	evento.preventDefault()//<-- Frenar el comportamiento predeterminado del link/hipervinculo

	console.log("El culpable de este suceso es:")
	console.log(evento.target)//<-- es "él" elemento a traves del cual se provoca el evento

	let url = evento.target.href //<-- manipulación de estructura atributo en js son propiedad

	let rta = confirm(`Esta seguro que desea ir a ${evento.target.innerText}`)

	if (rta) {
		alert (" Bueno ..chau")
		console.log("Hay que ir aca:" + url)
		window.location.href = url
		}
	}
*/