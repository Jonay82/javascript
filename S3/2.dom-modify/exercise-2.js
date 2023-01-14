//Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv = document.createElement('div');

const newP = document.createElement('p');

//inserta div en html
document.body.appendChild(newDiv);
//inserta p en div
newDiv.appendChild(newP);

console.log(newDiv)






