// movies = JSON.parse(localStorage.getItem("movies")) || [];

var infoPelicula = document.querySelector("#info")

let detalle = JSON.parse(localStorage.getItem("detalle"))

console.log("acaa:",detalle);

infoPelicula.innerHTML = `

<div class="card text-center h-100 w-50">            
        <img src="${detalle.imgPortada}" class="card-img-top imgCard" alt="...">
        <div class="card-body">
            <h5 class="card-title">${detalle.nombrePelicula}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${detalle.descripcion}</h6>                          
        </div>
</div>

`
