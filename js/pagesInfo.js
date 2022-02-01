movies = JSON.parse(localStorage.getItem("movies")) || [];
const infoPelicula = document.querySelector("#info")


function detallePelicula(position){
    
    console.log("aca", position);
// alert("hola")
infoPelicula.innerHTML= `<p>conchudo putoooo</p>
<h5 class="card-title">${movies.nombrePelicula}</h5> 
  
`
// window.location.href = infoPelicula.innerHTML
//  infoPelicula.innerHTML += `
// <p>holaa</p>`
};

detallePelicula();

