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


function reservar() {
    let idDiscoteca = localStorage.getItem('IdDiscoteca');
    let usuario = document.getElementById('guest').value;
    let fecha = document.getElementById('date').value;
    let tiempo = document.getElementById('time').value;
    let descripcion = document.getElementById('fName').value;
    let idUsuario = JSON.parse(localStorage.getItem('usuario'))[0].IdUsuario;

    // Verificar que los campos requeridos no estén vacíos
    if (!usuario || !fecha || !tiempo || !idDiscoteca || !idUsuario) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
    }

    algo(usuario, fecha, tiempo, descripcion, idDiscoteca, idUsuario);
}

console.log("123sss");

