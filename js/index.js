let movies=[
    {codigo:01,nombrePelicula:"Avengers: Endgame", categoria:"Acción",descripcion:"Tras los sucesos de “Vengadores: Infinity War”, los superhéroes que sobrevivieron a Thanos se reunen para poner en práctica un plan definitivo que podría acabar con el villano definitivamente. No saben si funcionará, pero es su única oportunidad de intentarlo. Cuarta entrega de la saga “Vengadores”",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/qwLbQSeFy6ht8skBtao7lAZjsDo.jpg"},
    {codigo:02,nombrePelicula:"La Liga de la Justicia", categoria:"Acción",descripcion:"Decidido a garantizar que el último sacrificio de Superman no fuera en vano, Bruce Wayne alinea fuerzas con Diana Prince con planes de reclutar un equipo de metahumanos para proteger al mundo de una amenaza inminente de proporciones catastróficas",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/pI25ennflmJ1R9q7ZTI681f0WBb.jpg"},
    {codigo:03,nombrePelicula:"Godzilla vs Kong", categoria:"Acción",descripcion:"Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/bnuC6hu7AB5dYW26A3o6NNLlIlE.jpg"},
    {codigo:04,nombrePelicula:"Spider-Man: Sin camino a casa", categoria:"Acción",descripcion:"Peter Parker está desenmascarado y ya no puede separar su vida normal de las altas apuestas de ser un superhéroe. Cuando le pide ayuda al Doctor Strange, lo que está en juego se vuelve aún más peligroso, lo que lo obliga a descubrir lo que realmente significa ser Spider-Man.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/1z7ZQhga4AcSkQNqEU3Tf9XpxoX.jpg"},
    {codigo:05,nombrePelicula:"Joker", categoria:"Drama",descripcion:"Situada en los años 80′. Un cómico fallido es arrastrado a la locura, convirtiendo su vida en una vorágine de caos y delincuencia que poco a poco lo llevará a ser el psicópata criminal más famoso de Gotham.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg"},
    {codigo:06,nombrePelicula:"Siempre contigo", categoria:"Drama",descripcion:"Aharon ha dedicado toda su vida a criar a su hijo Uri. Viven juntos en una rutina amable, lejos del mundo real. Pero Uri es autista y ya es lo suficientemente adulto para ir a un hogar especializado. En su camino a la institución, Aharon decide escaparse con su hijo y se lanzan a la carretera, sabiendo que Uri no está preparado para la separación. Aunque quizá sea el padre el que no está preparado.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/fQi7S0KRdsebY5f8FwHXzUvoSRO.jpg"},
    {codigo:07,nombrePelicula:"After The End", categoria:"Drama",descripcion:"El mundo ha quedado en ruinas tras el brote de una aterradora enfermedad. En lo más profundo de la campiña australiana, un grupo de supervivientes se ve inmerso en una lucha constante por mantenerse con vida.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/hjt6z9M3idg50Ithl3rI5p1lFoc.jpg"},
    {codigo:08,nombrePelicula:"Made in China", categoria:"Drama",descripcion:"Mientras trabaja para una turbia empresa inmobiliaria en Shanghai, Bryan Zellerman es incriminado por sus corruptos empleadores. Enfrentado a la elección entre escapar o descubrir la verdad detrás de su traición, su camino se desvía terriblemente fuera de control.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/yDhSW9tST2TLyrC1nvOW199NHWl.jpg"},
    {codigo:09,nombrePelicula:"Matrix Resurrections", categoria:"Ciencia Ficción",descripcion:"Cuarta entrega de la franquicia “Matrix”, que estará dirigida en solitario por Lana Wachowski. La producción del film arrancará en 2020, con Keanu Reeves y Carrie-Anne Moss interpretando de nuevo a sus personajes Neo y Trinity, respectivamente.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/xLNtaLaHudIzOqdEZ7R3lcDLrQQ.jpg"},
    {codigo:10,nombrePelicula:"Mother/Android", categoria:"Ciencia Ficción",descripcion:"Georgia y su novio Sam emprenden un viaje traicionero para escapar de su país, que está atrapado en una guerra inesperada con la inteligencia artificial. Días antes de la llegada de su primer hijo, la pareja debe enfrentarse a la Tierra de Nadie, un bastión del levantamiento de los androides, con la esperanza de llegar a un lugar seguro antes de dar a luz.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg"},
    {codigo:11,nombrePelicula:"Free Guy", categoria:"Ciencia Ficción",descripcion:"Un trabajador de un banco descubre que en realidad es un jugador dentro de un videojuego.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/vtsYPZi7bxVHhKnhENhiIz44Xlt.jpg"},
    {codigo:12,nombrePelicula:"Solitary", categoria:"Ciencia Ficción",descripcion:"Un hombre se despierta dentro de una habitación para descubrir que es un prisionero enviado al espacio para formar la primera colonia de la Tierra, y peor aún, su compañera de celda Alana está empeñada en destruir todo.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/nvoYkC0NADmjtEqIExepPAmjC34.jpg"},
    {codigo:13,nombrePelicula:"Superpoli en Las Vegas", categoria:"Comedia",descripcion:"Esta vez seguimos a Paul Blart hasta Las Vegas, donde va a acudir a una Expo de Guardias de Seguridad junto con su hija adolescente, antes de que esta se marche a la universidad. Con lo que Blart no cuenta es que van a atracar el casino donde se encuentra tanto su hija como él, desencadenando situaciones hilarante y teniendo que demostrar todo lo que ha aprendido en su formacón.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/rr9HfOt3QdFkPdKKZt8lI9Vbn9b.jpg"},
    {codigo:14,nombrePelicula:"Dale duro", categoria:"Comedia",descripcion:"Cuando al millonario James King (Ferrell) le condenan a ir a la cárcel por un delito que en realidad no ha cometido, contratará los servicios de quien le limpia el coche, a la vez un delincuente habitual (Hart), para que le enseñe cómo ha de comportarse para sobrevivir en prisión.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/jg6x8XO1Avu6aJVy8otVgb5AXqn.jpg"},
    {codigo:15,nombrePelicula:"Con la magia en los zapatos", categoria:"Comedia",descripcion:"El filme, protagonizado por Adam Sandler (Niños grandes 2), cuenta la historia de un hombre que se gana la vida reparando zapatos que tiene una habilidad excepcional: es capaz de meterse metafísicamente en las vidas de aquellas personas a las que ha arreglado el calzado.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/wLwquKAvtJ67KPJ2QskasIpS9uv.jpg"},
    {codigo:16,nombrePelicula:"Los Minions", categoria:"Comedia",descripcion:" Pasarán de la helada Antártida, a la ciudad de Nueva York en los años sesenta, para acabar en el Londres de la misma época, donde deberán enfrentarse al mayor reto hasta la fecha: salvar a la raza Minion de la aniquilación.",publicado:true,imgPortada:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/hVK35IfqYsk5jasR15aP5XBgKL1.jpg"},
]

let featuredMovie =movies[0];
let featuredMovieTitle = document.getElementById("featuredMovieTitle");
featuredMovieTitle.innerHTML = featuredMovie.nombrePelicula;
let featuredMovieImg = document.getElementById("featuredMovieImg");
featuredMovieImg.src = featuredMovie.imgPortada;
let featuredMovieDescription = document.getElementById("featuredMovieDescription");
featuredMovieDescription.innerHTML = featuredMovie.descripcion;
let featuredMovieBtn = document.getElementById("featuredMovieBtn");
// featuredMovieBtn.innerHTML = 