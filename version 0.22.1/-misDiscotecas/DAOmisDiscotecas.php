<?php
	include("../get_conexion.php");
  
  if(isset($_POST['user'],$_POST['tipo']))
  {
    //Toma las variables del CU
    $numeroId = $_POST['user'];  //Campo de texto
    $type = $_POST['tipo'];

    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  if ($type == 0) {
  $resultados = mysqli_query($conexion,"SELECT * FROM `Discoteca` WHERE UsuarioIdDueno = 1");
  }
  else if ($type == 1) {
  $resultados = mysqli_query($conexion,"DELETE FROM `Reserva` WHERE DiscoteaIdDiscoteca = ".$numeroId);
  }
  else if ($type == 2) {
  $resultados = mysqli_query($conexion,"DELETE FROM `etiqueta_Discoteca` WHERE DiscotecaIdDiscoteca = ".$numeroId);
  }
  else if ($type == 3) {
  $resultados = mysqli_query($conexion,"DELETE FROM `Discoteca` WHERE IdDiscoteca = ".$numeroId);
  }

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}
