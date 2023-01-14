//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const eliminat = document.querySelectorAll(".fn-remove-me");

for (let i=0; i<eliminat.length;i++){
    eliminat[i].remove()
}