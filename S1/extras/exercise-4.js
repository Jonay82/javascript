//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.
//```js
//
//```
let resultsell = 0;
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

 for (let i=0;i<products.length; i++){
     resultsell+=products[i].sellCount; 
      
 }
 console.log(resultsell)

  