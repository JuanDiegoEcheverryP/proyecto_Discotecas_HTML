// Get the modal
var modal = document.getElementById('id01');
var re = document.getElementById('logContainer');
console.log(re);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Consultar
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

function irCuenta() {
	window.location.href = "verCuenta.html";
}

//Pone los botones de los filtros
function popularFiltros() {
	populateLocalidad();
	populateTematica();
}

function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}

function salir() {
	localStorage.removeItem("usuario");
	recargar();
}

//Cuando se inicia la pantalla por primera vez
function initialize() {
	popularFiltros();
	OnclickBuscar("vacio","","");

	try {
		if (JSON.parse(localStorage.getItem("usuario"))[0].Nombre != null) {
			let aj = "<a> ds </a>";
			let miDiv = document.getElementById("tert");
			miDiv.innerHTML = '<li><a id="logName" class="text-basePurple font-bold lex flex-row justify-center items-center leading-6 transition ease-in-out duration-75 cursor-pointer text-accent-5 hover:text-accent-9 focus:outline-none focus:text-accent-8  hidden sm:inline-flex ml-6 underline decoration-baseGreen decoration-2 hover-underline-animation" ">' + JSON.parse(localStorage.getItem("usuario"))[0].Nombre+'</a>' +
	                              '<ul>' +
	                                '<li class="verCuenta" onclick="irCuenta()"><a href="#">Ver cuenta</a></li>'+
	                                '<li class="cerrarSesion" onclick="salir()"><a href="#">Cerrar sesión</a></li>'+
	                              '</ul>'+
	                            '</li>';
		}
	}
	catch(err) {
		console.log(err);
	}
}

initialize();

console.log("cascotecas");