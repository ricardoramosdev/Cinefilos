movies = JSON.parse(localStorage.getItem("movies")) || [];

const Paginas = document.querySelector(".Paginas") 

function pages() {
    movies.forEach(
        Paginas.innerHTML += `
        
        `
    )
}