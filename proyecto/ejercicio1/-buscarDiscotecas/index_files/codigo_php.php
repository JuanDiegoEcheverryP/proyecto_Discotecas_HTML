<?php
	include("../../abrir_conexion.php");

  function test($s, $n) 
  {
   return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
  }
  //CONSULTAR
  $resultados = mysqli_query($conexion,"SELECT * FROM $tabla_db1");

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
    
    //echo $consulta['idDiscoteca']."<br>";
  }
  echo test($myJSON, 1)."]";
?>