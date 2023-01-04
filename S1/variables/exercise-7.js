//Dado el siguiente javascript, actualiza el valor de la variable ``globalBasePrice`` a 25000 y actualiza la propiedad ``finalPrice`` de todos los coches con el valor de su propiedad ``basePrice`` más el valor de la variable ``globalBasePrice``.

//```js
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

const tocaroCar1 = (globalBasePrice+car1.basePrice+car1.finalPrice);
const tocaroCar2 = (globalBasePrice+car2.basePrice+car2.finalPrice);

console.log([tocaroCar1],[tocaroCar2])