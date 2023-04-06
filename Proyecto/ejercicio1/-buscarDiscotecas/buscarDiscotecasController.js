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
	let campo = document.getElementById("search").value;
	if (/^[A-Za-z\s]*$/.test(campo)) {
		let a = consultarDiscotecas(document.getElementById("search").value,filtro, tipo,valorFiltro);
	}
	else {
		alert("Ingrese solo caracteres alfanumericos")
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

//Cuando se inicia la pantalla por primera vez
function initialize() {
	popularFiltros();
	OnclickBuscar("vacio","","");
}

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};


initialize();

console.log("aassxxzxxzda");