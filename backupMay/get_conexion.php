<?php 

	$host 		 = "localhost";    			// Nombre del servidor donde esta alojada nuestra base de datos
	$basededatos = "id20662702_proyectodiscotecas";   	// Nombre de la base de datos (¡Las mayusculas IMPORTAN!)
	$usuariodb 	 = "id20662702_userroot";    				// Nombre del usuario administrador de la base de datos
	$clavedb 	 = "password1_DBB";    					// Clave para acceder a la base de datos.

	//LISTA DE TABLAS
	$tabla_db1 = "discoteca";
	$tabla_localidad = "localidad";

	//Conexion a la base de datos
	$conexion = new mysqli($host,$usuariodb,$clavedb,$basededatos);

?>

