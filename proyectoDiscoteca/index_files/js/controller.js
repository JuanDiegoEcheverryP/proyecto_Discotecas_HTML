function OnclickBuscar(argument) {
	const val = document.querySelector('#search').value;
	console.log(val);
	const abc = new Discoteca(1, 2, 'ale', 'alee', 0, 'nose');
	console.log(abc.getNombre());
}

function recargar() {
	window.location.reload();
}