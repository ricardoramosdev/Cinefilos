
function detallePelicula(index){
    
    window.location = "/pages/pagesinfo.html"
    let detalle = movies[index];
    localStorage.setItem("detalle", JSON.stringify(detalle));
    console.log("acaaa:", detalle);

    }
