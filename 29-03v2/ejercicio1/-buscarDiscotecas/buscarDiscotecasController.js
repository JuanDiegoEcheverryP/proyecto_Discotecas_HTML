// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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

console.log("buscarDiscotecasController status: Cargado");