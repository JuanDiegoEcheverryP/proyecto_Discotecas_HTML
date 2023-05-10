<?php
  include("../get_conexion.php");
  
  if(isset($_POST['user'],$_POST['tipo'],$_POST['name'],$_POST['direc'],$_POST['local'],$_POST['price'],$_POST['descrip'])) //Entren todas las variables !!!!
  {
    //Toma las variables del CU
    $nombre = $_POST['user'];  //Campo de texto //Entren todas las variables !!!!
    $tipo = $_POST['tipo'];
    $nam = $_POST['name'];
    $direccion =$_POST['direc'];
    $localidad = $_POST['local'];
    $precio = $_POST['price'];
    $descripcion = $_POST['descrip'];
    
    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  if($tipo == "localidad") {
      $resultados = mysqli_query($conexion,"SELECT * FROM `localidad`");
  }
  else if($tipo == "etiqueta") {
      $resultados = mysqli_query($conexion,"SELECT * FROM `etiqueta`");
  }
  else if($tipo == "agregar") {
      $resultados = mysqli_query($conexion,"INSERT INTO `Discoteca` (`UsuarioIdDueno`, `localidadidLocalidad`, `Nombre`, `Ubicacion`, `PermiteReservas`, `Descripcion`, `valoracion`, `nivelCosto`) VALUES (".$nombre.",".$localidad.", '".$nam."', '".$direccion."', '1', '".$descripcion."', '0', '".$precio."')");
  }
  else if($tipo == "getNew") {
      $resultados = mysqli_query($conexion,"SELECT MAX(idDiscoteca) as newd FROM Discoteca WHERE UsuarioIdDueno = ".$nombre."");
  }
  else if($tipo == "newTag") {
      $resultados = mysqli_query($conexion,"INSERT INTO `etiqueta_Discoteca` (`etiquetasidEtiqueta`, `DiscotecaIdDiscoteca`) VALUES ('".$nam."', '".$nombre."')");
  }

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}