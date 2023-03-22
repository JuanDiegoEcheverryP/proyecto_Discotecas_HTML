function OnclickBuscar() {
	var parametros = 
	{
	  "nombre" : ''
	};

	$.ajax({
	  data: parametros,
	  url: './-buscarDiscotecas/index_files/codigo_php.php',
	  type: 'POST',
	  
	  success: function(mensaje)
	  {
		const jsonArr = mensaje;
		const arr = JSON.parse(jsonArr);

		let print ="";
		for(let i = 0; i < arr.length; i++) {
			let obj = arr[i];
		
			print += "<p><b>Nombre:</b> " + obj.nombre + "</p>" + "<p><b>Ubicacion:</b> " + obj.ubicacion + "</p><br><hr>"
		}

		print += "<h3> ESTO LUEGO LO PONDRE BONITO CON BOOTSTRAP </h3>";
		$('#mostrar_mensaje').html(print);
	  }
	});
}

function recargar() {
	window.location.reload();
}