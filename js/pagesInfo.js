// movies = JSON.parse(localStorage.getItem("movies")) || [];

var infoPelicula = document.querySelector("#reemplazarCard")

let detalle = JSON.parse(localStorage.getItem("detalle"))

let background = document.getElementById("background");
background.setAttribute("style",`background-image: url("${detalle.imgFeatured}");
background-size: cover;
background-position: center;
`)

infoPelicula.innerHTML = `

<div class="col-4">
<img src="${detalle.imgPortada}" class="  imgCard" alt="...">

</div>
 
<div class="col-8 text-light"> 
<h1>${detalle.nombrePelicula}</h1>
                 <br>
                 <p>
                     Ver 
                     <strong>${detalle.nombrePelicula}</strong>
                   <p> ${detalle.descripcion}</p>
                      </p>
                      <div class="extra">
                           <span class="date" itemprop="dateCreated">Sep. 30, 2021</span>
                           <span class="country">China</span>
                           <span itemprop="duration" class="runtime">90 Min.</span>
                           <span itemprop="contentRating" class="CPG-13 rated">PG-13</span> 
                        </div> 
                       
</div> 
`