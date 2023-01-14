/*
Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

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

document.body.querySelector('input').classList.add('focusInput');
//document.body.querySelector('input').setAttribute('id', 'focusInput');

const muestraValor = (event) => console.log(event);
/*document.getElementsById('focusInput').addEventListener("focus", focusInput);
console.log('esto es un evento focus', focusInput);*/
//const funcionTonta = () => console.log('Soy una función tonta')

const focusInput = document.querySelector('.focusInput');
focusInput.addEventListener('focus', () => muestraValor(focusInput.value));
//const action = (miEvento) => console.log(miEvento);