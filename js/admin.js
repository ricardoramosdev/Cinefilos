let movies = JSON.parse(localStorage.getItem("movies")) || [];
const movieList = document.querySelector("#productList")
const EditMovie = document.querySelector("#editarPelicula")

function productList() {
    movies.forEach(function (element, index) {
        if (element) {
            // Debo rellenar la tabla con los datos del local storage
            console.log(element.categoria)
            movieList.innerHTML += `
        <tr>
                    <th scope='row'>${element.codigo}</th>
                    <td>${element.nombrePelicula}</td>
                    <td>${element.categoria}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.publicado==true ? "Si" : "-"}</td>
                    <td>
                    <div class="options">
                        <button class="btn btn-danger" data-toggle="tooltip" data-placement="left" title="Eliminar" onclick="deleteProduct(${index})"><i class="fas fa-trash"></i></button>
                        <button class="btn btn-primary" data-toggle="tooltip" data-placement="left" title="Editar" onclick="editProduct(${index})"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-warning" data-toggle="tooltip" data-placement="left" title="Destacar" onclick="feature(${index})"><i class="fas fa-star"></i></button>
                    </div>
                    
        </tr>`
        }
        // movies[index].featured 
    })
};

function deleteProduct(index) {
    movieList.innerHTML = "";
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    movies = JSON.parse(localStorage.getItem("movies"));
    productList();
};

function feature(index) {
    console.log(movies[index]);
    let featured = movies[index];
    featured["featured"] = true;
    console.log(movies[index].featured);
    localStorage.setItem("featured", JSON.stringify(featured));
    movies = JSON.parse(localStorage.getItem("movies"));
    productList();
}

productList();


function editProduct(e, index) {
index.preventDefault();

    document.getElementById("productList").classList.toggle( "d-none" );
   console.log("click")
    EditMovie.innerHTML += `
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        
      `
}



//     movieList.innerHTML += `<tr>
//     <th scope='row'> <input type="text" value="${movies.codigo}"></th>
//     <td>${movies.nombrePelicula}</td>
//     <td>${movies.categoria}</td>
//     <td>${movies.descripcion}</td>
//     <td>${movies.publicado == true ? "Si" : "-"}</td>
//     <td>
//     <div class="options">
//         <button class="btn btn-danger" data-toggle="tooltip" data-placement="left" title="Eliminar" onclick="deleteProduct(${index})"><i class="fas fa-trash"></i></button>
//         <button class="btn btn-primary" data-toggle="tooltip" data-placement="left" title="Editar" onclick="editProduct(${index})"><i class="fas fa-edit"></i></button>
//         <button class="btn btn-warning" data-toggle="tooltip" data-placement="left" title="Destacar" onclick="feature(${index})"><i class="fas fa-star"></i></button>
//     </div>
    
// </tr>
    
//         ` }

    // movies.splice(index, 1);
    // localStorage.setItem("movies", JSON.stringify(movies));
    // productList();



editProduct();