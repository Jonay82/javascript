//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true //o false en consecuencia. Una vez lo tengas compruebalo con un console.log.
//
//```js
//
//```
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
     {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
     {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
     {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
     {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i =0; i<alumns.length; i++){
    let T=0;
    let usu=alumns[i];
    if (usu.T1 === true ){
    T++;    
    }
    if(usu.T2 === true ){
    T++;
    }
    if(usu.T3 === true ){
    T++;    
    }
    if(T>=2){
        usu.isApproved =true;

    }
    else{
        usu.isApproved =false;

    }

}
console.log(alumns)

//Otra forma de hacer esto resumido
//for (let i =0; i<alumns.length; i++){
//    let T=0;
//    let usu=alumns[i];
//  usu.T1 ? T++ : T; 
//  usu.T2 ? T++ : T;
//  usu.T3 ? T++ : T;
//
//  usu.isAproved = T>=2 ? true: false;
//
//  console.log(alumns)
//
//
//
//