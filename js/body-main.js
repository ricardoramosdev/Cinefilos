movies = JSON.parse(localStorage.getItem("movies")) || [];

const Drama = document.querySelector("#categoriaDrama")
const Accion = document.querySelector("#categoriaAccion")
const CiFi = document.querySelector("#categoriaCiFi")
const Comedia = document.querySelector("#categoriaComedia")

const infoPelicula = document.querySelector("#info")

function categorias() {
    

    movies.forEach(function (el, index) {

        if (el.categoria === "Drama") {
            Drama.innerHTML += `
        <button class="btn" onclick="detallePelicula(${index})" href="/pages/pagesinfo.html" >
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
        <button  class="btn" onclick="detallePelicula(${index})" href="/pages/pagesinfo.html">
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
        <button class="btn" onclick="detallePelicula(${index})" href="/pages/pagesinfo.html">
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
        <button class="btn"  onclick="detallePelicula(${index})" href="/pages/pagesinfo.html">
            <div class="card paginas text-center h-100">
                        <img src="${el.imgPortada}" class="card-img-top imgCard" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombrePelicula}</h5>             
                            <h6 class="card-subtitle mb-2 text-muted">Mas populares</h6>         
                        </div>
            </div>
        </button>
        `
        }
    })
    
};


categorias();


// window.onload = (function detallePelicula(){
    
//     // console.log("holaaaaa");
// // alert("hola")
// infoPelicula.innerHTML= `<p>conchudo</p>`
// // window.location.href = infoPelicula.innerHTML
// //  infoPelicula.innerHTML += `
// // <p>holaa</p>`
// });

// detallePelicula();


