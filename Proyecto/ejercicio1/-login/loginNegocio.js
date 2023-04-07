console.log("Negocio login cargaddddo");

function login(usuario,contrasena) {
	$.ajax({
		data: { user : usuario, password: contrasena, tipo: "", nombre: "", apellido: ""},
		url: './-login/DAOlogin.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	  {
		const jsonArr = mensaje; //Se recibe como formato string

		const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
		console.log(arr);
		if (arr.length == 1) {
			console.log("logeando");
			window.location.href = "index.html";
			return true;
		}
		else {
			console.log("Mal login");
			return false;
		}
	  }
	})
}

function registro(nombre,apellido,username,passw) {
	if (!userExist(username)) {
		$.ajax({
			data: { user : username, password: passw, tipo: "registrarse", nombre: nombre, apellido: apellido},
			url: './-login/DAOlogin.php', //Lugar a donde se envia
			type: 'POST',
			
			success: function(mensaje)
		  {
			alert("Se agrego al usuario");
			window.location.href = "login.html";
		  }
		})
	}
	
}

function userExist(username) {
	$.ajax({
		data: { user : username, password: "", tipo: "exist", nombre: "", apellido: ""},
		url: './-login/DAOlogin.php', //Lugar a donde se envia
		type: 'POST',
			
		success: function(mensaje)
		{
			const jsonArr = mensaje; //Se recibe como formato string

			const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
			console.log(arr.length);
			if (arr.length == 1) {
				console.log("Usuario ya existe");
				return true;
			}
			else {
				return false;
			}
		}
	})
}