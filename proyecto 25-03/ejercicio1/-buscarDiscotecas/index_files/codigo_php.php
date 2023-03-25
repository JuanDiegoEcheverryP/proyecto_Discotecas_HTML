<?php
	include("../../abrir_conexion.php");
  
  if(isset($_POST['userID']))
  {
    $uid = $_POST['userID'];

    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTAR
  $resultados = mysqli_query($conexion,"SELECT * FROM Discoteca WHERE Nombre LIKE '%".$uid."%'");

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}
?>