movies = JSON.parse(localStorage.getItem("movies")) || [];
const infoPelicula = document.querySelector("#info")


function detallePelicula(index){
let info = movies[index];
localStorage.setItem("info", JSON.stringify(info));
 
    console.log("aca:", index);
// alert("hola")
infoPelicula.innerHTML= `<p>conchudo putoooo</p>
<h5 class="card-title">${index.nombrePelicula}</h5> 
  
`
window.location = "/pages/pagesinfo.html"
//  infoPelicula.innerHTML += `
// <p>holaa</p>`
};
