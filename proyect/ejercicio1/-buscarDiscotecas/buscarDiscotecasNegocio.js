console.log("buscarDiscotecasNegocio status: Cargado");


//Construye la tarjeta de las discotecas
function cardBuilder(discoteca) {
    try {
            return `
            <div class="place-card">
                <div class="place-card__img">
                    <img src="https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png" class="place-card__img-thumbnail" alt="Thumbnail">
                </div>
                <div class="place-card__content">
                    <h5 class="place-card__content_header"><a href="https://kiranworkspace.com/demo/projects/code-snippets/card/travel-app-card/#!" class="text-dark">` + discoteca.getNombre() +`</a> <a href="https://kiranworkspace.com/demo/projects/code-snippets/card/travel-app-card/#!"><i class="fa fa-heart-o"></i></a></h5>
                    <div class="flex-center">
                        <p class="mb-0"><i class="fa fa-map-marker"></i> <span class="text-muted">` + discoteca.getUbicacion() + `</span></p>
                        <div class="rating-box">
                            <div class="rating-stars">
                                <img src="./Travel App Place Card UI Design_files/grey-star.svg" alt="">
                            <div class="filled-star" style="width:86%"></div>
                        </div>
                    </div>
                <br>
                <button class="button-34" role="button">Reservar</button>
                </div>
            </div>
            </div>`;
    }
    catch {
        return ;
    }
}

function consultarDiscotecas(valor) {
    //Envia una consulta, si es exitosa, se ejecut ala linea "success: function(mensaje)"
    $.ajax({
		data: { userID : valor },
		url: './-buscarDiscotecas/index_files/DAOBuscarDiscotecas.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	  {
		const jsonArr = mensaje; //Se recibe como formato string

		const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados

		let print ="";

		for(let i = 0; i < arr.length; i++) {
			let obj = arr[i];

            //Se crea la clase discoteca
			const discoteca = new Discoteca (obj.idDiscoteca, obj.UsuarioIdDueno, obj.Nombre, obj.Ubicacion, obj.PermiteReservas, obj.Descripcion);
			
            //Concatena las tarjetas
			print += cardBuilder(discoteca);
		}
        $('#mostrar_mensaje').html(print); //Imprime el mensaje
	  }
	})
}