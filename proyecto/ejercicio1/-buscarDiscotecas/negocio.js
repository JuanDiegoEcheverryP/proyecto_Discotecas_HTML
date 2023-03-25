console.log("Index negocio status: Cargado");

function cardBuilder(discoteca) {
    try {
            return `
            <div class="place-card">
                <div class="place-card__img">
                    <img src="https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png" class="place-card__img-thumbnail" alt="Thumbnail">
                </div>
                <div class="place-card__content">
                    <h5 class="place-card__content_header"><a href="https://kiranworkspace.com/demo/projects/code-snippets/card/travel-app-card/#!" class="text-dark">` + discoteca.getNombre() +`</a> <a href="https://kiranworkspace.com/demo/projects/code-snippets/card/travel-app-card/#!"><i class="fa fa-heart-o"></i></a></h5>
                    <div class="flex-center">
                        <p class="mb-0"><i class="fa fa-map-marker"></i> <span class="text-muted">` + discoteca.getUbicacion() + `</span></p>
                        <div class="rating-box">
                            <div class="rating-stars">
                                <img src="./Travel App Place Card UI Design_files/grey-star.svg" alt="">
                            <div class="filled-star" style="width:86%"></div>
                        </div>
                    </div>
                <br>
                <button class="button-34" role="button">Reservar</button>
                </div>
            </div>
            </div>`;
    }
    catch {
        return ;
    }
}