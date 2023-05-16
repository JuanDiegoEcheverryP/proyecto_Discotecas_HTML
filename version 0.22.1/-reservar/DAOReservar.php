<?php
  include("../get_conexion.php");
  
  if(isset($_POST['var1'],$_POST['var2'],$_POST['var3'],$_POST['var4'],$_POST['id'],$_POST['idDisco'],$_POST['idUsu'])) //Entren todas las variables !!!!
  {
    //Toma las variables del CU
    $nombre = $_POST['var1'];  //Campo de texto //Entren todas las variables !!!!
    $date = $_POST['var2'];
    $timestamp = $_POST['var3'];
    $comentarios = $_POST['var4'];
    $numeroId = $_POST['id'];
    $idDiscote = $_POST['idDisco'];
    $idUsuarito = $_POST['idUsu'];

    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  $resultados = mysqli_query($conexion,"INSERT INTO `Reserva` (`IdReserva`, `Fecha`, `Hora`, `CantidadPersonas`, `EstadoDeReserva`, `UsuarioIdUsuario`, `DiscoteaIdDiscoteca`, `valoracion`) VALUES (NULL, '".$date."', '".$timestamp."', '".$nombre."', '1', '".$idUsuarito."', '".$idDiscote."', NULL)");
  

  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}