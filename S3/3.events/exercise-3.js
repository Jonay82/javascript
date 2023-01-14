/*
Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
```
*/


document.querySelector('input').classList.add('.focusInput');
/*document.body.querySelector('input').setAttribute('id', 'focusInput');
let eventInput = function(event) {
    //console.log(event)
}
document.getElementsById('eventInput').addEventListener("input", eventInput);
console.log('esto es un evento input', eventInput);*/
const muestraValor = (event) => console.log(event);
const valueInput = document.body.querySelector(".focusInput");
valueInput.addEventListener('input', () => muestraValor (focusInput.value));