function irInicio() {
	window.location.href = "index.html";
}

//Recargar
function recargar() {
  window.location.reload();
}

function test() {
  var algos = prompt("Escribe algo: ");
  localStorage.setItem("nombre_variable", algos);
  window.location.href = "testeo.php";
}

console.log("Carga el controlador del reservar");

