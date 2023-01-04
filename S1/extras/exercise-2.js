//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar //frutas duplicadas. Finalmente, imprime el array resultante.
//```js
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false},
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false},
    {name: "Rice", isVegan: true},
    {name: "Pasta", isVegan: true} ];

    let fruitsI = 0;

    for (let i=0; i< foodSchedule.length; i++){
        const elemet=foodSchedule[i];
        if(elemet.isVegan===false)
        elemet.name=fruits[fruitsI ];
        fruitsI ++;
        elemet.isVegan=true
    }

console.log(foodSchedule)