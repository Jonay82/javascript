/*
Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

````js

```` 

*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const oldAge = ages.filter( (ages)=>{
    return ages > 18;
}) 

console.log(oldAge);

