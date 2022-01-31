let movies = JSON.parse(localStorage.getItem("movies")) || [];
const movieList = document.querySelector("#productList")
let featured = JSON.parse(localStorage.getItem("featured")) || movies[0];

function productList() {
    console.log("Product list deploy")

    movies.forEach(function (element, index) {

        if (element) {
            // Debo rellenar la tabla con los datos del local storage


            movieList.innerHTML += `
        <tr>
                    <th scope='row' ><div style="width:4rem;overflow:hidden;text-overflow: ellipsis;" >${element.codigo}</div></th>
                    <td>${element.nombrePelicula}</td>
                    <td>${element.categoria}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.publicado==true ? "Si" : "-"}</td>
                    <td>
                    <div class="options d-flex flex-wrap">
                        <button class="btn " data-toggle="tooltip" data-placement="left" title="Eliminar" onclick="deleteProduct(${index})"><i class="fas fa-trash"></i></button>
                        <button class="btn " data-toggle="tooltip" data-placement="left" title="Editar"  data-bs-toggle="modal"
                        data-bs-target="#editMovie" onclick="editMovie(${index})"><i class="fas fa-edit"></i></button>
                        
                        <button class=${element.featured==true ? "btn-feature":"btn "} id="btn-feature" data-toggle="tooltip" data-placement="left" title="Destacar. Este titulo aparecera en la cabecera de la pantalla principal" onclick="feature(${index})"><i class="fas fa-star"></i></button>
                    </div>
                    
        </tr>`
        }
    })
};

function deleteProduct(index) {
    Swal.fire({
        title: 'Esta seguro de eliminar este item?',
        text: "No se podrá revertir este paso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#777',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'Este item ha sido eliminado.',
                'success'
            )
            movieList.innerHTML = "";
            movies.splice(index, 1);
            localStorage.setItem("movies", JSON.stringify(movies));
            movies = JSON.parse(localStorage.getItem("movies"));
            productList();
        }
    })

};


function feature(index) {
    movieList.innerHTML = "";
    movies.map(el => delete el.featured);
    console.log(movies[index])
    let featured = movies[index];
    featured["featured"] = true;
    console.log(movies[index].featured);
    movies.splice(index, 1, featured);
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("featured", JSON.stringify(featured));
    movies = JSON.parse(localStorage.getItem("movies"));
    productList();
}

function newMovie(event) {
    event.preventDefault();
    const movieForm = document.getElementsByTagName("form")[1];
    
    let newMovie = {
        codigo: new Date().getTime(),
        nombrePelicula: movieForm.elements["name"].value,
        categoria: movieForm.elements["category"].value,
        descripcion: movieForm.elements["description"].value,
        publicado: movieForm.elements["publish"].checked,
        imgPortada: movieForm.elements["imgPortada"].value,
        imgFeatured: movieForm.elements["imgFeatured"].value,
    }
    console.log(newMovie);
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
    productList();

}

function editMovie(index) {
    movieList.innerHTML = "";
    const movieForm = document.getElementsByTagName("form")[2];
    let editMovie = movies[index];
    movieForm.elements["name"].value=editMovie.nombrePelicula;
    movieForm.elements["category"].value=editMovie.categoria;
    movieForm.elements["description"].value=editMovie.descripcion;
    movieForm.elements["publish"].checked=editMovie.publicado;
    movieForm.elements["imgPortada"].value=editMovie.imgPortada;
    movieForm.elements["imgFeatured"].value=editMovie.imgFeatured;
}
function confirmEdition(index){

    movies.splice(index, 1);
    newMovie();
    

}

// export{feature}

productList();