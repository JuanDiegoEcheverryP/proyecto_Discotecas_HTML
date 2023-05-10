console.log("Negocio del mis discotecas");

function getMisDiscotecas(idUser) {
        
    $.ajax({
	data: { user : idUser, tipo:0},
	url: './-misDiscotecas/DAOmisDiscotecas.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
	   const jsonArr = mensaje; //Se recibe como formato string
	   const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
	   
	   if(arr.length != 0) {
	       let print = "";
	   for (var obj of arr) {
	       console.log(obj);
	       const discoteca = new Discoteca (obj.IdDiscoteca, obj.UsuarioIdDueno, obj.Nombre, obj.Ubicacion, obj.PermiteReservas, obj.Descripcion, obj.localida, obj.valoracion);
	       
	       print += '<div class="discoteca" style="border: 2px solid #777;border-radius: 10px;margin: 15px 0;">' +
                        '<table style="width: 100%;">'+
                            '<tbody><tr>'+
                                '<th style="width: 85%;">'+
                        '<table style="width: 100%;">'+
     '<tbody><tr>'+
    '<th></th>'+
    '<th></th>'+
'<th></th>'+
 ' </tr>'+
  '<tr style="border-bottom: 1px solid #777;">'+
    '<td style="padding: 5px;font-weight: 700;">Nombre</td>'+
    '<td>:</td>'+
'<td style="width: 100%;padding: 5px;">'+discoteca.Nombre+'</td>'+
  '</tr>'+
  '<tr style="border-bottom: 1px solid #777;">'+
    '<td style="padding: 5px;font-weight: 700;">Ubicacion</td>'+
    '<td>:</td>'+
'<td style="width: 70%;padding: 5px;">'+discoteca.Ubicacion+'</td>'+
  '</tr><tr>'+
    '<td style="padding: 5px;font-weight: 700;">Descripcion</td>'+
    '<td>:</td>'+
'<td style="width: 70%;padding: 5px;">'+discoteca.Descripcion+'</td>'+
  '</tr>'+
    '</tbody></table>'+
'</th>'+
        '<th style="border-left: 2px solid #777;">'+
    '<div class="botones" style="height: 100%;padding: 0 20px;justify-content: center;display: flex;">'+
        '<button class="button-37" style="margin: 10px 0;width: 100%;max-width: 100px;" onclick="editarDiscoteca('+discoteca.idDiscoteca+')">Editar</button>'+
    '</div>'+
    '<div class="botones" style="height: 100%;padding: 0 20px;justify-content: center;display: flex;">'+
        '<button class="button-37" style="background: #F00;border-color: #F00;width: 100%;max-width: 100px;margin: 10px 0;" onclick="eliminarDiscoteca('+discoteca.idDiscoteca+')">Eliminar</button>'+
    '</div>'+
'</th>'+
    '</tr></tbody></table>'+
'</div>';
	   }
	   
	   let miDiv = document.getElementById("misDiscotecas");
	   miDiv.innerHTML = print;
	   }
	   
	}
    });
}

function eliminarReservas(id) {
    $.ajax({
	data: { user : id, tipo: 1},
	url: './-misDiscotecas/DAOmisDiscotecas.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
	    console.log("reservas");
	}
    });
}

function eliminarTags(id) {
    $.ajax({
	data: { user : id, tipo: 2},
	url: './-misDiscotecas/DAOmisDiscotecas.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
	    console.log("tags");
	}
    });
}

function eliminarLaDiscoteca(id) {
    $.ajax({
	data: { user : id, tipo: 3},
	url: './-misDiscotecas/DAOmisDiscotecas.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
	    console.log("discoteca");
	}
    });
}