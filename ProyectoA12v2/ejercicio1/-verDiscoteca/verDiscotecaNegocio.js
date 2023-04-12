console.log("Carga el negocio de ver discotecas");

function descriptionBuilder(discoteca) {
    try {
            return `
            <div class="container">
                  <div class="row">
                     <div class="col-md-6"><img src="https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png" class="imagen-discoteca" alt="Thumbnail"></div>
                     <div class="col-md-6">
                        <h1 class="initial">`+ discoteca.getNombre() + `</h1>
                        <h4>Ubicacion: `+ discoteca.getUbicacion() + `</h4>
                        <div class="rating-box">
                           <h4>Valoracion:&nbsp &nbsp </h4>
                           <div class="rating-stars">
                              <img src="./Travel App Place Card UI Design_files/grey-star.svg" alt="">
                              <div class="filled-star" style="width:`+discoteca.getValoracion() * 20 +`%">
                              </div>
                           </div>
                        </div>
                        <hr>
                        <h4>Descripcion</h4>
                        <p>`+ discoteca.getDescripcion() + `</p>
                        <br>
                        <button class="button-34" role="button" onclick="irReservar(`+discoteca.getIdDiscoteca() + `)">Reservar</button>
                     </div>
                  </div>
                  <hr>
                  <h4>Comentarios: 0 Comentarios</h4>
                  <p>Esta discoteca no tiene reseñas aún</p>
                  <hr>
               </div>`;
    }
    catch {
        return ;
    }
}

function irReservar(id) {
    if (isLoged()) {
        localStorage.setItem("IdDiscoteca", id);
        window.location.href = "reservar.html";
    }
    else {
    }
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

function getDiscoteca(idDsicoteca) {
	$.ajax({
		data: { id : idDsicoteca},
		url: './-verDiscoteca/DAOverDiscoteca.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	  {
		const jsonArr = mensaje; //Se recibe como formato string

		const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados

		let print ="";

        if (arr.length == 0) {
        }
        else {
    		let obj = arr[0];
             //Se crea la clase discoteca
    		const discoteca = new Discoteca (obj.IdDiscoteca, obj.UsuarioIdDueno, obj.Nombre, obj.Ubicacion, obj.PermiteReservas, obj.Descripcion, obj.localidad, obj.valoracion);
    		print += descriptionBuilder(discoteca);
                //Concatena las tarjetas
            $('#descripcionDiscoteca').html(print);
        }
	  }
	})
}