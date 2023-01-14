//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 
const a=10;
const b= 5;

const suma = (a,b)=>{
   return console.log(a+b)
}
//- Ejecuta esta función sin pasar ningún parametro
suma();
//- Ejecuta esta función pasando un solo parametro
suma(4)
//- Ejecuta esta función pasando dos parametros
suma(10,5)


console.log(suma)