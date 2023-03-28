<?php
	include("../../get_conexion.php");
  
  if(isset($_POST['userID']))
  {
    //Toma las variables del CU
    $uid = $_POST['userID'];

    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  $resultados = mysqli_query($conexion,"SELECT * FROM Discoteca WHERE Nombre LIKE '%".$uid."%'");

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}
?>