console.log("negocio");

function eliminarReserva(idReserva){
    if(confirm("¿Esta seguro que quiere eliminar la reserva?")) {
        console.log("Eliminando reserva " + idReserva);
        
        $.ajax({
		data: { user : idReserva, tipo:1, campo1:0, campo2:0},
		url: './-verCuenta/DAOverCuenta.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	    {
	        
	    }
        });
        window.location.reload();
    }
}

function llenarCampos() {
			var idUser = document.getElementById("idusuario");
			var nombres = document.getElementById("nombres");
			var apellidos = document.getElementById("apellidos");
			var user = document.getElementById("usuario");
			var tipouser = document.getElementById("tipousuario");

			idUser.innerHTML = '<strong class="pr-1">ID usuario:</strong>'+ JSON.parse(localStorage.getItem("usuario"))[0].IdUsuario;
			nombres.value = JSON.parse(localStorage.getItem("usuario"))[0].Nombre;
			apellidos.value = JSON.parse(localStorage.getItem("usuario"))[0].Apellido;
			user.value = JSON.parse(localStorage.getItem("usuario"))[0].NombreUsuario;

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
var t = 9;
function ajaxtest(idUser) {
    $.ajax({
		data: { user : idUser, tipo:0, campo1:0, campo2:0},
		url: './-verCuenta/DAOverCuenta.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	  {
		const jsonArr = mensaje; //Se recibe como formato string
		const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
        
        var reservar = document.getElementById("reservasTag");
	    let resultSet = arr;
	
    	if (resultSet.length == 0) {
    	    console.log("no hay nada");
    	}
    	else {
    	    let print = "";
    	    for(var i = 0; i < resultSet.length;i++) {
    	        console.log(resultSet);
    	        print += '<div class="card-body pt-0 d-flex" id="reservasTag">'+
  '<table class="table table-bordered" style="margin: 15px 15px 0 15px;">'+
    '<tbody>'+
      '<tr>'+
        '<th width="30%">Id Reserva</th>'+
        '<td width="2%">:</td>'+
        '<td>'+resultSet[i].IdReserva+'</td>'+
      '</tr>'+
      '<tr>'+
        '<th width="30%">Lugar</th>'+
        '<td width="2%">:</td>'+
        '<td>'+resultSet[i].Nombre+'</td>'+
      '</tr>'+
      '<tr>'+
        '<th width="30%">Cantidad de personas</th>'+
        '<td width="2%">:</td>'+
        '<td>'+resultSet[i].CantidadPersonas+'</td>'+
      '</tr>'+
      '<tr>'+
        '<th width="30%">Fecha</th>'+
        '<td width="2%">:</td>'+
        '<td>'+resultSet[i].Fecha+'</td>'+
      '</tr>'+
    '</tbody>'+
  '</table>'+
  '<button class="btn btn-danger ml-auto" style="margin: auto;" onclick="eliminarReserva('+resultSet[i].IdReserva+')">Eliminar</button>'+
'</div>';
    	    }
    	    reservar.innerHTML = print;
    	}
	  }
	});
}

function userExist(value) {
     return new Promise((resolve, reject) => {
        $.ajax({
            data: { user : value, tipo:2, campo1:0, campo2:0},
            url: './-verCuenta/DAOverCuenta.php',
            type: 'POST',
            success: function(mensaje) {
                const jsonArr = mensaje;
                const arr = JSON.parse(jsonArr);
                resolve(arr.length); // Resuelve la promesa con el valor de arr
            },
            error: function(error) {
                reject(error); // Rechaza la promesa con el error recibido
            }
        });
    });
}

function actualizarNombre(IdUsuario, nombres, apellidos) {
    $.ajax({
		data: { user : IdUsuario, campo1:nombres, campo2:apellidos, tipo:3},
		url: './-verCuenta/DAOverCuenta.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	    {
	        
	    }
        });
}

function actualizarUsername(id, username) {
    $.ajax({
		data: { user : id, campo1:username, campo2:0, tipo:4},
		url: './-verCuenta/DAOverCuenta.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	    {
	        
	    }
        });
}