<?php
	include("../get_conexion.php");
  
  if(isset($_POST['user'],$_POST['tipo'],$_POST['campo1'],$_POST['campo2']))
  {
    //Toma las variables del CU
    $numeroId = $_POST['user'];  //Campo de texto
    $type = $_POST['tipo'];
    $field1 = $_POST['campo1'];
    $field2 = $_POST['campo2'];

    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  if ($type == 0) {
  $resultados = mysqli_query($conexion,"SELECT Reserva.IdReserva, Discoteca.Nombre,Reserva.CantidadPersonas,Reserva.Fecha FROM `Reserva`,Discoteca WHERE Reserva.UsuarioIdUsuario = ".$numeroId." and Reserva.DiscoteaIdDiscoteca = Discoteca.IdDiscoteca");
  }
  else if ($type == 2){
       $resultados = mysqli_query($conexion,"SELECT NombreUsuario FROM `Usuario` WHERE NombreUsuario = '".$numeroId."'");
  }
  else if ($type == 3){
       $resultados = mysqli_query($conexion,"UPDATE `Usuario` SET `Nombre` = '".$field1."', `Apellido` = '".$field2."' WHERE `Usuario`.`IdUsuario` = ".$numeroId);
  }
  else if ($type == 4){
       $resultados = mysqli_query($conexion,"UPDATE `Usuario` SET `NombreUsuario` = '".$field1."' WHERE `Usuario`.`IdUsuario` = ".$numeroId);
  }
  else {
      $resultados = mysqli_query($conexion,"DELETE FROM `Reserva` WHERE `Reserva`.`IdReserva` =".$numeroId);
  }

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}


