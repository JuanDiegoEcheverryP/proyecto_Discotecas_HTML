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
                        <button class="button-34" role="button" onclick="">Reservar</button>
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