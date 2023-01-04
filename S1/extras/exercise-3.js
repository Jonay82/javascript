//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, //pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array //en por consola.
//```js

const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165},
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}];

    //  Pelicula pequeña, menos de 100 minutos
    let small=[];
    //  pelicula mediana, igual o mas de 100 minutos y menos de 200
    let mediun=[];
    //  pelicula grande, mas de 200 minutos
    let large=[];

    for (let i=0; i< movies.length; i++){
            let time=movies[i].durationInMinutes  ;
       if(time>200) {
            large.push(movies[i]);
          }
        if(time>=100&&time<=200){
              mediun.push(movies[i]);
            }
         if(time<100){
               small.push(movies[i]);
        }
          
    }
    
    console.log( "small", small)   
    console.log( "mediun", mediun)   
    console.log( "large", large)   

