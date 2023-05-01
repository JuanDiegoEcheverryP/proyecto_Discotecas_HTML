<?php
	include("../get_conexion.php");
  
  if(isset($_POST['user'], $_POST['password'], $_POST['tipo'], $_POST['nombre'], $_POST['apellido']))
  {
    //Toma las variables del CU
    $usuario = $_POST['user'];  //Campo de texto
    $contrasena = $_POST['password'];
    $type = $_POST['tipo'];
    $name = $_POST['nombre'];
    $secondName = $_POST['apellido'];

    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  if ($type == "") {
    $resultados = mysqli_query($conexion,"SELECT * FROM `Usuario` WHERE NombreUsuario = '".$usuario."' and Contrasena = '".$contrasena."'");
  }
  elseif ($type == "exist") {
    $resultados = mysqli_query($conexion,"SELECT * FROM `Usuario` WHERE NombreUsuario = '".$usuario."'");
  }
  elseif ($type == "registrarse") {
    $resultados = mysqli_query($conexion,"INSERT INTO `Usuario` (`IdUsuario`, `NombreUsuario`, `Contrasena`, `Nombre`, `Apellido`, `TipoDocumento`, `EstadoUsuario`) VALUES (NULL, '".$usuario."', '".$contrasena."', '".$name."', '".$secondName."', 'CC', '1')");
  }
  

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}