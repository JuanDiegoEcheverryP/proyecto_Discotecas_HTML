console.log("Carga el negocio crear discoteca");
let listaTag = [];

function getTags() {
    return listaTag;
}

function validar(cadena) {
  const regex = /^[a-zA-Z0-9 _.-]+$/; // Expresión regular para permitir letras, números, espacios y algunos caracteres especiales
  return regex.test(cadena); // Retorna true si la cadena cumple con el regex, false si no lo cumple
}

function NoVacia(cadena) {
  return cadena.length != 0;
}

function toggleCheck(id) {
    for ( var i = 0; i < listaTag.length; i++) {
        if(listaTag[i] === id) {
            listaTag.splice(i, 1); 
            console.log(listaTag);
            return true;
        }
    }
    listaTag.push(id);
    console.log(listaTag);
    return false;
}

function fillLocalidades() {
    $.ajax({
	data: { user : 0, tipo: "localidad", name: 0, direc: 0, local: 0, price:0, descrip:0},
	url: './-crearDiscoteca/DAOcrearDiscoteca.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
	   const jsonArr = mensaje; //Se recibe como formato string
	   const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
	   
	   let print = "";
	   
	   for (var obj of arr) {
	       print += '<option value="'+obj.idLocalidad+'">'+obj.nombreLocalidad+'</option>';
	   }
	   
	   let miDiv = document.getElementById("divLocalidad");
	   miDiv.innerHTML = '<select id="localidad" style="padding: 5px;border: 1px solid #CCC;border-radius: 10px;>'+ print + '</select>';
    }
    });
}

function fillEtiquetas() {
     $.ajax({
	data: { user : 0, tipo: "etiqueta", name: 0, direc: 0, local: 0, price:0, descrip:0},
	url: './-crearDiscoteca/DAOcrearDiscoteca.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
	   const jsonArr = mensaje; //Se recibe como formato string
	   const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
	   console.log(arr);
	   
	   let print = '<table style="width: 100%">';
	   
	   let contador = -1;
	   for (var obj of arr) {
	       contador++;
	       if (contador == 0) {
	           print += '<tr>';
	       }
	       if(contador == 3) {
	           contador = 0;
	           print += '</tr>';
	       }
	       print += '<th><input type="checkbox" id="tag'+obj.idEtiqueta+'" name="tag'+obj.idEtiqueta+'" value="'+obj.idEtiqueta+'" onclick="checkTag('+obj.idEtiqueta+');">';
	       print += '<label for="tag'+obj.idEtiqueta+'" style="padding-left: 70px;padding-right: 30px;">'+obj.nombreEtiqueta+'</label><th>'
	   }
	   print += '</table>';
	   let miDiv = document.getElementById("etiquetas");
	   miDiv.innerHTML = print;
	}
    });
}

function agregarDiscoteca(id,nombre,direccion,localidad,precio,descripcion) {
    $.ajax({
	data: { user : id, tipo: "agregar", name: nombre, direc: direccion, local: localidad, price:precio, descrip: descripcion},
	url: './-crearDiscoteca/DAOcrearDiscoteca.php', //Lugar a donde se envia
	type: 'POST',
		
	success: function(mensaje)
	{
    }
    });
    
    
    return new Promise((resolve, reject) => {
        $.ajax({
		data: { user : id, tipo: "getNew", name: 0, direc: 0, local: 0, price:0, descrip:0},
		url: './-crearDiscoteca/DAOcrearDiscoteca.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	    {
	        const jsonArr = mensaje; //Se recibe como formato string
	        const arr = JSON.parse(jsonArr); //Lo convierte a formato JSON para poder manejarlo luego por resultados
	        resolve(jsonArr);
	    }
    	})
    });
}

function agregarEtiquetas(tmp) {
    for(var tag in listaTag) {
        console.log(tmp + " : " + tag);
        $.ajax({
		data: { user : tmp, tipo: "newTag", name: tag, direc: 0, local: 0, price:0, descrip:0},
		url: './-crearDiscoteca/DAOcrearDiscoteca.php', //Lugar a donde se envia
		type: 'POST',
		
		success: function(mensaje)
	    {
	    }
    	})
    }
    
}