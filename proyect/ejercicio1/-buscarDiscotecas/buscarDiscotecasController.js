console.log("buscarDiscotecasController status: Cargado");

//Cosnultar
function OnclickBuscar( ) {
	let a = consultarDiscotecas(document.getElementById("search").value);
}

//Recargar
function recargar() {
	window.location.reload();
}

//Cuando se inicia la pantalla por primera vez
function initialize() {
	OnclickBuscar();
}

initialize();