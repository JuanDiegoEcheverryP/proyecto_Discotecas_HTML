<?php
	include("../../get_conexion.php");
  
  if(isset($_POST['userID'], $_POST['filter'], $_POST['tipoFiltro'], $_POST['valorFiltro']))
  {
    //Toma las variables del CU
    $uid = $_POST['userID'];  //Campo de texto
    $a = $_POST['filter'];    
    $tipo = $_POST['tipoFiltro'];
    $valor = $_POST['valorFiltro'];

    //Definicion de variable para formatear en JSON
    function test($s, $n) {
      return substr($s,0,$n).substr($s,$n+1,strlen($s)-$n);
    }

  //CONSULTA
  if ($a == 'logCheck') {
    $resultados = mysqli_query($conexion,"SELECT EstadoUsuario FROM `usuario` WHERE Nombre = '".$uid."'");  
  }
  elseif ($a == 'popularLocalidades') {
    $resultados = mysqli_query($conexion,"SELECT * FROM localidad");  
  }
  elseif ($a == 'popularTematica') {
    $resultados = mysqli_query($conexion,"SELECT * FROM etiqueta");  
  }

  elseif ($a == 'vacio') {
    $resultados = mysqli_query($conexion,"SELECT * FROM Discoteca WHERE Nombre LIKE '%".$uid."%'");
  }
  else {
    if ($tipo == 'localidad') {
      $resultados = mysqli_query($conexion,"SELECT * FROM Discoteca WHERE localidadidLocalidad = '".$valor."'");
    }
    elseif ($tipo == 'tematica') {
      $resultados = mysqli_query($conexion,"SELECT * FROM etiqueta_discoteca, discoteca WHERE etiqueta_discoteca.DiscotecaIdDiscoteca = discoteca.IdDiscoteca and etiqueta_discoteca.etiquetasidEtiqueta = '".$valor."'");
    }
    elseif ($tipo == 'valoracion') {
      $resultados = mysqli_query($conexion,"SELECT * FROM Discoteca WHERE valoracion >= '".$valor."'");
    }
    elseif ($tipo == 'costo') {
      $resultados = mysqli_query($conexion,"SELECT * FROM `discoteca` WHERE nivelCosto = '".$valor."'");
    }
  }



  $myJSON = "[";
  while($consulta = mysqli_fetch_array($resultados))
  {
    $myJSON = $myJSON.",".json_encode($consulta);
  }
  echo test($myJSON, 1)."]";
}