<?php 

	$host 		 = "localhost";    			// Nombre del servidor donde esta alojada nuestra base de datos
	$basededatos = "proyectoDiscotecas";   	// Nombre de la base de datos (¡Las mayusculas IMPORTAN!)
	$usuariodb 	 = "root";    				// Nombre del usuario administrador de la base de datos
	$clavedb 	 = "";    					// Clave para acceder a la base de datos.

	//LISTA DE TABLAS
	$tabla_db1 = "discoteca";
	$tabla_localidad = "localidad";

	//Conexion a la base de datos
	$conexion = new mysqli($host,$usuariodb,$clavedb,$basededatos);

?>
