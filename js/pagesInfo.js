// movies = JSON.parse(localStorage.getItem("movies")) || [];

var infoPelicula = document.querySelector("#reemplazarCard")

let detalle = JSON.parse(localStorage.getItem("detalle"))



infoPelicula.innerHTML = `

<div class="col-3">
<img src="${detalle.imgPortada}" class="  imgCard" alt="...">

</div>
 
<div class="col-9"> 
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