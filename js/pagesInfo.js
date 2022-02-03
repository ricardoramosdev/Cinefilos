movies = JSON.parse(localStorage.getItem("movies")) || [];

var infoPelicula = document.querySelector("#info")

let detalle = JSON.parse(localStorage.getItem("detalle"))

console.log("acaa:",detalle);

infoPelicula.innerHTML = `
<h4> ${detalle.descripcion}</h4>`