console.log("Carga el negocio ssssvar");

function algo(usuario,fecha,tiempo,descripcion,idDiscoteca,idUsuario) {
	$.ajax({
		data: { var1: usuario,var2: fecha,var3: tiempo,var4: descripcion, id: 1,idDisco:idDiscoteca,idUsu:idUsuario}, //Cambien los nomrbes de las variables
		url: './-reservar/DAOReservar.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	  {
		let print ="";
        print += `<h1>` + "Cantidad personas: " + usuario + "; Fecha: " + fecha + "; Hora: " + tiempo + "Comentarios: " + descripcion + `</h1>`
        $('#testing').html(print);
        //alert("Cantidad personas: " + a + "; Fecha: " + b + "; Hora: " + c + "Comentarios: " + d);
	  }
	})

	// body...
}