movies = JSON.parse(localStorage.getItem("movies")) || [];

const Drama = document.querySelector("#categoriaDrama")
const Accion = document.querySelector("#categoriaAccion")
const CiFi = document.querySelector("#categoriaCiFi")
const Comedia = document.querySelector("#categoriaComedia")

function categorias() {

    movies.forEach(function (el, i) {

        if (el.categoria === "Drama") {
            Drama.innerHTML += `
        <div class="card" style="width: 18rem;">
                    <img src="${el.imgPortada}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${el.nombrePelicula}</h5>
                        <p class="card-text">${el.descripcion}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        `
        } else if (el.categoria === "Acción") {
            Accion.innerHTML += `
            <div class="card" style="width: 18rem;">
                        <img src="${el.imgPortada}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>
                            <p class="card-text">${el.descripcion}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            `
        } else if (el.categoria === "Ciencia Ficción") {
            CiFi.innerHTML += `
            <div class="card" style="width: 18rem;">
                        <img src="${el.imgPortada}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>
                            <p class="card-text">${el.descripcion}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            `
        } else if (el.categoria === "Comedia") {
            Comedia.innerHTML += `
            <div class="card" style="width: 18rem;">
                        <img src="${el.imgPortada}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>
                            <p class="card-text">${el.descripcion}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            `
        }
    })
};

categorias();