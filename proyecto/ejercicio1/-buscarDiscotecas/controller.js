console.log("Controlador status: Cargado");

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

			const discoteca = new Discoteca (obj.idDiscoteca, obj.UsuarioIdDueno, obj.Nombre, obj.Ubicacion, obj.PermiteReservas, obj.Descripcion);
			
			print += cardBuilder(discoteca);
		}
		$('#mostrar_mensaje').html(print);
	  }
	});
}

function recargar() {
	window.location.reload();
}

OnclickBuscar();