console.log("Carga el controlador de ver discotecas");

function irInicio() {
	window.location.href = "index.html";
}

//Recargar
function recargar() {
	window.location.reload();
}

function initialize() {
	window.$_GET = new URLSearchParams(location.search);
	var value1 = $_GET.get('IdDiscoteca');
	getDiscoteca(value1);
}


initialize();