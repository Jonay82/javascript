//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

  for ( const newDiv= i; i< 7; i++ ){
    const newP = document.createElement('p');      
    newP.textCont='Esto e un parrafo';
    newDiv.appendChild(newP);  
}

console.log(newDiv);
console.log(newP);
