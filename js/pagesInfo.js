// movies = JSON.parse(localStorage.getItem("movies")) || [];

var infoPelicula = document.querySelector("#reemplazarCard")

let detalle = JSON.parse(localStorage.getItem("detalle"))

console.log("acaa:",detalle);

infoPelicula.innerHTML = `
<div class="col">
<img src="${detalle.imgPortada}" class=" card-img-top imgCard" alt="...">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
 <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
 <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
</div>
 
<div class="col"> 
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

<div class="puntajes mt-4 border border-2  p-2 col">
<h4>Trama</h4>
<div class="progress m-2 ">
    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <h4>Trama</h4>
  <div class="progress m-2 ">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <h4>Trama</h4>
  <div class="progress m-2">
    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

</div>
`
{/* <div class="card text-center h-100 w-50">            
       
        <div class="card-body">
            <h5 class="card-title">${detalle.nombrePelicula}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${detalle.descripcion}</h6>                          
        </div>
</div> */}