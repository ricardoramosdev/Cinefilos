
function detallePelicula(index){
    
    window.location = "/pages/pagesinfo.html"
    let detalle = movies[index];
    console.log("sai:", detalle);
    localStorage.setItem("detalle", JSON.stringify(detalle));
    console.log("acaaa:", detalle);

    }
