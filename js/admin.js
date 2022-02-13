let movies = JSON.parse(localStorage.getItem("movies")) || [];
const movieList = document.querySelector("#productList")
let featured = JSON.parse(localStorage.getItem("featured")) || movies[0];

function productList() {
    console.log("Product list deploy")
    movieList.innerHTML = "";

    movies.forEach(function (element, index) {
        if (element) {
            // Debo rellenar la tabla con los datos del local storage


            movieList.innerHTML += `
        <tr>
                    <th scope='row' ><div style="width:3rem;overflow:hidden;text-overflow: ellipsis;" >${element.codigo}</div></th>
                    <td>${element.nombrePelicula}</td>
                    <td>${element.categoria}</td>
                    <td class="d-none d-md-table-cell">${element.descripcion}</td>
                    <td>${element.publicado==true ? "Si" : "-"}</td>
                    <td>
                    <div class="options d-flex flex-wrap ">
                        <button class="btn text-light" data-toggle="tooltip" data-placement="left" title="Eliminar" onclick="deleteProduct(${index})"><i class="fas fa-trash"></i></button>
                        <button class="btn text-light " id="editMovie" data-toggle="tooltip" data-placement="left" title="Editar"  data-bs-toggle="modal"
                        data-bs-target="#editMovie" onclick="editMovie(${index})"><i class="fas fa-edit"></i></button>
                        
                        <button class=${element.featured==true ? "btn-feature":"btn "} id="btn-feature" data-toggle="tooltip" data-placement="left" title="Destacar. Este titulo aparecera en la cabecera de la pantalla principal" onclick="feature(${index})"><i class="fas fa-star "></i></button>
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
            movies.splice(index, 1);
            localStorage.setItem("movies", JSON.stringify(movies));
            movies = JSON.parse(localStorage.getItem("movies"));
            productList();
        }
    })

};
let featureIndex = "";
function feature(index) {
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
   localStorage.setItem("featureIndex", index )
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
    Swal.fire(
        'Agregado!',
        'Agregado con exito.',
        'success'
    )
    productList();

}
const movieFormEdition = document.getElementsByTagName("form")[2];

function editMovie(index) {
    
    let editMovie = movies[index];
    movieFormEdition.elements["name"].value=editMovie.nombrePelicula;
    movieFormEdition.elements["category"].value=editMovie.categoria;
    movieFormEdition.elements["description"].value=editMovie.descripcion;
    movieFormEdition.elements["publish"].checked=editMovie.publicado;
    movieFormEdition.elements["imgPortada"].value=editMovie.imgPortada;
    movieFormEdition.elements["imgFeatured"].value=editMovie.imgFeatured;
    document.getElementById("editMovie").setAttribute("index",index)
    

}
function confirmEdition(event){
    event.preventDefault();
    
    Swal.fire({
        title: 'Esta seguro de editar este item?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#777',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Editar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Editado',
                'Este item ha sido modificado.',
                'success'
            )
    
            let indice =document.getElementById("editMovie").getAttribute("index")
             
             const movieFormEdition = document.getElementsByTagName("form")[2];
         
             let editedMovie = {
                 codigo:movies[indice].codigo,
                 nombrePelicula: movieFormEdition.elements["name"].value,
                 categoria: movieFormEdition.elements["category"].value,
                 descripcion: movieFormEdition.elements["description"].value,
                 publicado: movieFormEdition.elements["publish"].checked,
                 imgPortada: movieFormEdition.elements["imgPortada"].value,
                 imgFeatured: movieFormEdition.elements["imgFeatured"].value,
             }
           
             movies.splice(indice, 1,editedMovie);
         
             localStorage.setItem("movies", JSON.stringify(movies));
             productList();
             window.location.reload()
        }
    })
   
    

}


productList();
