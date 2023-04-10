console.log("buscar Discotecas Negocio status: Cargado");


//Construye la tarjeta de las discotecas
function cardBuilder(discoteca) {
    try {
            return `
            <div class="place-card">
                <div class="place-card__img">
                    <img src="https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png" class="place-card__img-thumbnail" alt="Thumbnail">
                </div>
                <div class="place-card__content">
                    <h5 class="place-card__content_header"><a class="hover-underline-animation" href="verDiscoteca.php?IdDiscoteca=`+discoteca.getIdDiscoteca() + `" onclick="irDescripcion(`+discoteca.getIdDiscoteca() + `)">` + discoteca.getNombre() +`</a> <a href="index.html"><i class="fa fa-heart-o"></i></a></h5>
                    <div class="flex-center">
                        <p class="mb-0"><i class="fa fa-map-marker"></i> <span class="text-muted">` + discoteca.getUbicacion() + `</span></p>
                        <div class="rating-box">
                            <div class="rating-stars">
                                <img src="./Travel App Place Card UI Design_files/grey-star.svg" alt="">
                            <div class="filled-star" style="width:`+discoteca.getValoracion() * 20 +`%"></div>
                        </div>
                    </div>
                <br>
                <button class="button-34" role="button" onclick="irReservar(`+discoteca.getIdDiscoteca() + `)">Reservar</button>
                </div>
            </div>
            </div>`;
    }
    catch {
        return ;
    }
}

function irDescripcion(id) {
    console.log("ir descipcion: " + id);
}

function irReservar(id) {
    if (isLoged()) {
        alert(id);
        localStorage.setItem("IdDiscoteca", id);
        window.location.href = "reservar.html";
    }
    else {
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

        if (arr.length == 0) {
            alert("La consulta no tiene resultados");
        }
        else {
    		for(let i = 0; i < arr.length; i++) {
    			let obj = arr[i];
                //Se crea la clase discoteca
    			const discoteca = new Discoteca (obj.IdDiscoteca, obj.UsuarioIdDueno, obj.Nombre, obj.Ubicacion, obj.PermiteReservas, obj.Descripcion, obj.localidad, obj.valoracion);

                //Concatena las tarjetas
    			print += cardBuilder(discoteca);
    		}
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

var y;
function isLoged() {
    let ad = JSON.parse(localStorage.getItem("usuario"));

    if (localStorage.getItem("usuario") == null) {
        y = false;
    }
    else {
        try {
            $.ajax({
                data: { userID : ad[0].Nombre, filter: 'logCheck', tipoFiltro: '', valorFiltro: '' },
                url: './-buscarDiscotecas/index_files/DAOBuscarDiscotecas.php', //Lugar a donde se envia
                type: 'POST',
                    
                success: function(mensaje)
                {
                    const jsonArr = mensaje; //Se recibe como formato string
                    const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
                    try {
                        if (arr[0].EstadoUsuario == 1) {
                            y = true;
                        }
                        else {
                            y = false;
                        }
                    }
                    catch {
                        y = false;
                    }
                }
            })
        }
        catch {
            y = false;
        }
    }
    return y;
}

