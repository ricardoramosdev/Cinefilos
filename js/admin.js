let movies = JSON.parse(localStorage.getItem("movies")) || [];

const movieList = document.querySelector("#productList")

function productList() {

    movies.forEach(function (element, index) {

        if (element) {
            // Debo rellenar la tabla con los datos del local storage

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
                        <button class="btn btn-primary" data-toggle="tooltip" data-placement="left" title="Editar"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-warning" data-toggle="tooltip" data-placement="left" title="Destacar" onclick="feature(${index})"><i class="fas fa-star"></i></button>
                    </div>
                    
        </tr>`
        }
        movies[index].featured 
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
    console.log(movies[index])
    let featured = movies[index];
    featured["featured"] = true;
    console.log(movies[index].featured );
    localStorage.setItem("featured", JSON.stringify(featured));
    movies = JSON.parse(localStorage.getItem("movies"));
    productList();
}
productList();