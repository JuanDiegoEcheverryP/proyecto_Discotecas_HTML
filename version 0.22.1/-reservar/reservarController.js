function irInicio() {
	window.location.href = "index.html";
}

//Recargar
function recargar() {
  window.location.reload();
}

//Funcion para salir hacia la pagina principal
function salir() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}

//Funcion para validar y reservar
function reservar() {
    let idDiscoteca = localStorage.getItem('IdDiscoteca');
    let usuario = document.getElementById('guest').value;
    let fecha = document.getElementById('date').value;
    let tiempo = document.getElementById('time').value;
    let descripcion = document.getElementById('fName').value;
    let idUsuario = JSON.parse(localStorage.getItem('usuario'))[0].IdUsuario;

    // Verificar que los campos requeridos no estén vacíos
    if (!usuario || !fecha || !tiempo || !idDiscoteca || !idUsuario) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
    }

    algo(usuario, fecha, tiempo, descripcion, idDiscoteca, idUsuario);
    
	window.location.href = "index.html";
	alert("Reserva realizada");
}

//Funcion que lleva al login
function irLogin() {
  window.location.href = "login.html";
}

//Funcion que lleva a ver cuenta
function irCuenta() {
	window.location.href = "verCuenta.html";
}

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
