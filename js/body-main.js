movies = JSON.parse(localStorage.getItem("movies")) || [];

const Drama = document.querySelector("#categoriaDrama")
const Accion = document.querySelector("#categoriaAccion")
const CiFi = document.querySelector("#categoriaCiFi")
const Comedia = document.querySelector("#categoriaComedia")

function categorias() {

    movies.forEach(function (el) {

        if (el.categoria === "Drama") {
            Drama.innerHTML += `
            
        <div class="card Paginas" style="width: 250px;" >
       
       
                    <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${el.nombrePelicula}</h5>                    
                    </div>
                 
        </div>
              
        `
        } else if (el.categoria === "Acción") {
            Accion.innerHTML += `
            <div class="card Paginas" style="width: 250px;">
                        <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>                                                        
                        </div>
            </div>
            `
        } else if (el.categoria === "Ciencia Ficción") {
            CiFi.innerHTML += `
            <div class="card Paginas" style="width: 250px;">
                        <img src="${el.imgPortada}" class="card-img-top imgCard " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>                                        
                        </div>
            </div>
            `
        } else if (el.categoria === "Comedia") {
            Comedia.innerHTML += `
            <div class="card Paginas" style="width: 250px;">
                        <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>                                                    
                        </div>
            </div>
            `
        }
    })
};

categorias();