function irInicio() {
	window.location.href = "index.html";
}

//Recargar
function recargar() {
  window.location.reload();
}

function test() {
  var algos = prompt("Escribe algo: ");
  localStorage.setItem("nombre_variable", algos);
  window.location.href = "testeo.php";
}

function salir() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}

function irLogin() {
  window.location.href = "login.html";
}

function irMisDiscotecas() {
  window.location.href = "misDiscotecas.html";
}

function irCuenta() {
	window.location.href = "verCuenta.html";
}

function checkTag(id) {
    toggleCheck(id);
}

function addDiscoteca() {
    let nombre = document.getElementById("nombreCampo");
    let direccion = document.getElementById("direccionCampo");
    let localidad = document.getElementById("localidad");
    let precio = document.getElementById("nivelCampo");
    let tags = getTags();
    let descripcion = document.getElementById("descripcionCampo");
    
    if(NoVacia(nombre.value) && NoVacia(direccion.value) && NoVacia(localidad.value) && NoVacia(precio.value) && NoVacia(descripcion.value)) {
        if(validar(nombre.value) && validar(direccion.value) && validar(localidad.value) && validar(precio.value) && validar(descripcion.value)) {
            agregarDiscoteca(JSON.parse(localStorage.getItem("usuario"))[0].IdUsuario,nombre.value,direccion.value,localidad.value,precio.value,descripcion.value).then((arr) => {
                agregarEtiquetas(JSON.parse(arr)[0].newd);
                
                alert("Discoteca agregada");
                irMisDiscotecas();
            }).catch((error) => {
                console.error(error);
            });
        }
        else {
            alert("Ingreso de caracteres invalidos");
        }
    }
    else {
        alert("Rellene todos los campos obligatorios");
    }
}

function initialize() {
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
    
    fillLocalidades();
    fillEtiquetas();
}

  initialize();
console.log("controler crear discoteca")