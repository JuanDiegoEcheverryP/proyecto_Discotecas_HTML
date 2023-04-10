// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Cosnultar
function OnclickBuscar(filtro, tipo, valorFiltro) {
	let d = document.getElementById("search").value;
	if (onlyLettersAndSpaces(d)) {
		let a = consultarDiscotecas(document.getElementById("search").value,filtro, tipo,valorFiltro);
	}
	else {
		alert("Busqueda invalida");
	}
}

//Recargar
function recargar() {
	window.location.reload();
}

//Recargar
function irLogin() {
	window.location.href = "login.html";
}

//Pone los botones de los filtros
function popularFiltros() {
	populateLocalidad();
	populateTematica();
}

function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}

//Cuando se inicia la pantalla por primera vez
function initialize() {
	console.log("Logeado: " + JSON.parse(localStorage.getItem("usuario"))[0].Nombre);
	popularFiltros();
	OnclickBuscar("vacio","","");
}

initialize();

console.log("carga el controlador de buscar discotecas");