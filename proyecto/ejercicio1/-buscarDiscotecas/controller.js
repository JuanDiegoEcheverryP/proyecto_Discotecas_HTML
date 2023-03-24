function OnclickBuscar() {
	var parametros = 
	{
	  "nombre" : ''
	};
	$.ajax({
	  data: parametros,
	  url: './-buscarDiscotecas/index_files/codigo_php.php',
	  type: 'POST',
	  
	  success: function(mensaje)
	  {
		const jsonArr = mensaje;
		const arr = JSON.parse(jsonArr);
		let print ="";
		for(let i = 0; i < arr.length; i++) {
			let obj = arr[i];
		
			print += `<div class="place-card">
			<div class="place-card__img">
			   <img src="./Travel App Place Card UI Design_files/nature1.jpg" class="place-card__img-thumbnail" alt="Thumbnail">
			</div>
			<div class="place-card__content">
			   <h5 class="place-card__content_header"><a href="https://kiranworkspace.com/demo/projects/code-snippets/card/travel-app-card/#!" class="text-dark">` + obj.Nombre +`</a> <a href="https://kiranworkspace.com/demo/projects/code-snippets/card/travel-app-card/#!"><i class="fa fa-heart-o"></i></a></h5>
			   <div class="flex-center">
				  <p class="mb-0"><i class="fa fa-map-marker"></i> <span class="text-muted">` + obj.Ubicacion + `</span></p>
				  <div class="rating-box">
					 <div class="rating-stars">
						<img src="./Travel App Place Card UI Design_files/grey-star.svg" alt="">
						<div class="filled-star" style="width:86%"></div>
					 </div>
				  </div>
			   </div>
			</div>
		 </div>`;
		}
		$('#mostrar_mensaje').html(print);
	  }
	});
}

function recargar() {
	window.location.reload();
}

OnclickBuscar();
