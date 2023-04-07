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
	let a = consultarDiscotecas(document.getElementById("search").value,filtro, tipo,valorFiltro);
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

//Cuando se inicia la pantalla por primera vez
function initialize() {
	popularFiltros();
	OnclickBuscar("vacio","","");
}

initialize();

console.log("aassda");