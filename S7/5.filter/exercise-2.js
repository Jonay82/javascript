/*
Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

````js

```` 
*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const par = ages.filter((par) =>{
    return par % 2 ==0;

})

const impar = ages.filter((impar)=>{
    return impar % 2 ==1;
})

console.log(par);
console.log(impar);