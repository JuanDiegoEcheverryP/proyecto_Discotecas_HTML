console.log("Controllerssddddd");

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

function salir() {
	localStorage.removeItem("usuario");
	window.location.href = "index.html";
}

function initialize() {

	try {
		if (JSON.parse(localStorage.getItem("usuario"))[0].Nombre != null) {
			console.log(JSON.parse(localStorage.getItem("usuario"))[0]);
			var idUser = document.getElementById("idusuario");
			var nombres = document.getElementById("nombres");
			var apellidos = document.getElementById("apellidos");
			var user = document.getElementById("usuario");
			var tipouser = document.getElementById("tipousuario");

			idUser.innerHTML = '<strong class="pr-1">ID usuario:</strong>'+ JSON.parse(localStorage.getItem("usuario"))[0].IdUsuario;
			nombres.innerHTML = JSON.parse(localStorage.getItem("usuario"))[0].Nombre;
			apellidos.innerHTML = JSON.parse(localStorage.getItem("usuario"))[0].Apellido;
			user.innerHTML = JSON.parse(localStorage.getItem("usuario"))[0].NombreUsuario;

			if (JSON.parse(localStorage.getItem("usuario"))[0].EstadoUsuario == 1) {
				tipouser.innerHTML = '<strong class="pr-1">Tipo de usuario:</strong>Cliente';
			}
			else {
				tipouser.innerHTML = '<strong class="pr-1">Tipo de usuario:</strong>Dueño';
			}
			
			console.log("sesion iniciada");
			let aj = "<a> ds </a>";
			let miDiv = document.getElementById("tert");
			miDiv.innerHTML = '<li><a id="logName" class="text-basePurple font-bold lex flex-row justify-center items-center leading-6 transition ease-in-out duration-75 cursor-pointer text-accent-5 hover:text-accent-9 focus:outline-none focus:text-accent-8  hidden sm:inline-flex ml-6 underline decoration-baseGreen decoration-2 hover-underline-animation" ">' + JSON.parse(localStorage.getItem("usuario"))[0].Nombre+'</a>' +
	                              '<ul>' +
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
