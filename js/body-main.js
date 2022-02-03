movies = JSON.parse(localStorage.getItem("movies")) || [];

const Drama = document.querySelector("#categoriaDrama")
const Accion = document.querySelector("#categoriaAccion")
const CiFi = document.querySelector("#categoriaCiFi")
const Comedia = document.querySelector("#categoriaComedia")




function categorias() {
    

    movies.forEach(function (el, index) {
        if(el.publicado){ //agrego esta condicion para que solo muestre las peliculas que el administrador tiene marcadas como publicadas
        if (el.categoria === "Drama") {
            Drama.innerHTML += `
        <button class="btn my-4" onclick="detallePelicula(${index})"  >
            <div class="card paginas text-center h-100">              
                    <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${el.nombrePelicula}</h5> 
                        <h6 class="card-subtitle mb-2 text-muted">Mas populares</h6>                                                
                    </div>                 
            </div>     
        </button>          
        `
        } else if (el.categoria === "Acción") {
            Accion.innerHTML += `
        <button  class="btn my-4" onclick="detallePelicula(${index})" >
            <div class="card paginas text-center h-100 ">            
                        <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Mas populares</h6>                          
                        </div>
            </div>
        </button>
        `
        } else if (el.categoria === "Ciencia Ficción") {
            CiFi.innerHTML += `
        <button class="btn my-4" onclick="detallePelicula(${index})" >
            <div class="card paginas text-center h-100">
                        <img src="${el.imgPortada}" class="card-img-top imgCard " alt="...">
                        <div class="card-body">
                            <h5 class="card-title ">${el.nombrePelicula}</h5>    
                            <h6 class="card-subtitle mb-2 text-muted">Mas populares</h6>     
                        </div>
            </div>
        </button>
        `
        } else if (el.categoria === "Comedia") {
            Comedia.innerHTML += `
        <button class="btn my-4"  onclick="detallePelicula(${index})" >
            <div class="card paginas text-center h-100">
                        <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>             
                            <h6 class="card-subtitle mb-2 text-muted">Mas populares</h6>         
                        </div>
            </div>
        </button>
        `
        }}
    })
    
};

categorias();
    

