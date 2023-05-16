console.log("Controllers");

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

function actualizar() {
    const regex1 = /^[\w\s]+$/;
    const regex2 = /^[\w]+$/;
    let op = false;
    let temp = JSON.parse(localStorage.getItem("usuario"))[0];
    var nombres = document.getElementById("nombres");
	var apellidos = document.getElementById("apellidos");
	var user = document.getElementById("usuario");
	
	if(regex1.test(nombres.value) && regex1.test(apellidos.value) && regex2.test(user.value)) {
	    if (nombres.value == temp.Nombre && apellidos.value == temp.Apellido && temp.NombreUsuario == user.value) {
	        alert("no ha cambiado nada");
	        return 0;
	    }
	    else {
	        if (temp.NombreUsuario != user.value) {
    	        userExist(user.value).then((arr) => {
                    if(arr == 0) {
                        actualizarUsername(temp.IdUsuario,user.value);
                        op = true;
                    }
                    else {
                        alert("El nombre de usuario ya ha sido usado por alguien mas");
                        return 0;
                    }
    	        }).catch((error) => {
                    console.error(error);
                });
	        }
	        if (nombres.value != temp.Nombre || apellidos.value) {
	            actualizarNombre(temp.IdUsuario, nombres.value, apellidos.value);
	        }
    	    localStorage.removeItem("usuario");
    	    window.location.href = "login.html";
    	    alert("Informacion actualizada, vuelva a iniciar sesion");
	    }
	    
	}
	else {
	    alert("Valores de campos invalidos");
	}
	
}

function initialize() {
    localStorage.removeItem("temp");
	try {
		if (JSON.parse(localStorage.getItem("usuario"))[0].Nombre != null) {
		    llenarCampos();
		}
	}
	catch(err) {
		console.log(err);
	}
	ajaxtest(JSON.parse(localStorage.getItem("usuario"))[0].IdUsuario);
}

initialize();
