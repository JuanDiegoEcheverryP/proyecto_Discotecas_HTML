console.log("buscarDiscotecasNegocio status: Cargadsssso");


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
                            <div class="filled-star" style="width:`+discoteca.getValoracion() * 20 +`%"></div>
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

function localidadBuilder(objLocalidad) {
    try {
            return `
            <div class="button-34 noShadow inline_block" onclick="OnclickBuscar('1','localidad','`+objLocalidad.getIdLocalidad()+`')">`+objLocalidad.getLocalidad()+`</div>`;
    }
    catch {
        return ;
    }
}

function tematicaBuilder(objEtiqueta) {
    try {
            return `
            <div class="button-34 noShadow inline_block" onclick="OnclickBuscar('1','tematica','`+objEtiqueta.getIdEtiqueta()+`')">`+objEtiqueta.getNombreEtiqueta()+`</div>`;
    }
    catch {
        return ;
    }
}

function consultarDiscotecas(valor, filtro, tipoFiltro, valorFiltro) {
    //Envia una consulta, si es exitosa, se ejecut ala linea "success: function(mensaje)"
    $.ajax({
		data: { userID : valor, filter: filtro, tipoFiltro: tipoFiltro, valorFiltro: valorFiltro },
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
			const discoteca = new Discoteca (obj.idDiscoteca, obj.UsuarioIdDueno, obj.Nombre, obj.Ubicacion, obj.PermiteReservas, obj.Descripcion, obj.localidad, obj.valoracion);

            //Concatena las tarjetas
			print += cardBuilder(discoteca);
		}
        if (print == "") {
            alert("La busqueda que intento realiar no tiene resultados");
        }
        else {
            $('#mostrar_mensaje').html(print); //Imprime el mensaje
        }
        
	  }
	})
}

function populateLocalidad() {
    //Envia una consulta, si es exitosa, se ejecut ala linea "success: function(mensaje)"
    $.ajax({
        data: { userID : '', filter: 'popularLocalidades', tipoFiltro: '', valorFiltro: '' },
        url: './-buscarDiscotecas/index_files/DAOBuscarDiscotecas.php', //Lugar a donde se envia
        type: 'POST',
        
        success: function(mensaje)
      {
        const jsonArr = mensaje; //Se recibe como formato string

        const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados

        let print ="";

        for(let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            //Se crea la clase localidad
            const objLocalidad = new localidad (obj.idLocalidad, obj.nombreLocalidad);
            

            //Concatena los botones
            print += localidadBuilder(objLocalidad);
        }
        $('#botonesLocalidad').html(print);
        
      }
    })
}

function populateTematica() {
    $.ajax({
        data: { userID : '', filter: 'popularTematica', tipoFiltro: '', valorFiltro: '' },
        url: './-buscarDiscotecas/index_files/DAOBuscarDiscotecas.php', //Lugar a donde se envia
        type: 'POST',
        
        success: function(mensaje)
      {
        const jsonArr = mensaje; //Se recibe como formato string

        const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados

        let print ="";

        for(let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            //Se crea la clase Tematica
            const objEtiqueta = new etiqueta (obj.idEtiqueta, obj.nombreEtiqueta);

            //Concatena los botones
            print += tematicaBuilder(objEtiqueta);
        }
        $('#botonesTematica').html(print);
        
      }
    })
}