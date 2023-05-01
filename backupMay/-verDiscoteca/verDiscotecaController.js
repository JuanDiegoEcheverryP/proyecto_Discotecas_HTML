console.log("Carga el controlador de ver discotecas");

function irInicio() {
	window.location.href = "index.html";
}

//Recargar
function recargar() {
	window.location.reload();
}

function irLogin() {
	window.location.href = "login.html";
}

function irCuenta() {
	window.location.href = "verCuenta.html";
}

function salir() {
	localStorage.removeItem("usuario");
	window.location.href = "index.html";
}

function initialize() {
	window.$_GET = new URLSearchParams(location.search);
	var value1 = $_GET.get('IdDiscoteca');
	getDiscoteca(value1);

	try {
		if (JSON.parse(localStorage.getItem("usuario"))[0].Nombre != null) {
			console.log("sesion iniciada");
			let aj = "<a> ds </a>";
			let miDiv = document.getElementById("tert");
			miDiv.innerHTML = '<li><a id="logName" class="text-basePurple font-bold lex flex-row justify-center items-center leading-6 transition ease-in-out duration-75 cursor-pointer text-accent-5 hover:text-accent-9 focus:outline-none focus:text-accent-8  hidden sm:inline-flex ml-6 underline decoration-baseGreen decoration-2 hover-underline-animation" ">' + JSON.parse(localStorage.getItem("usuario"))[0].Nombre+'</a>' +
	                              '<ul>' +
	                                '<li class="verCuenta" onclick="irCuenta()"><a href="#">Ver cuenta</a></li><br>'+
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
console.log("aaaaa");