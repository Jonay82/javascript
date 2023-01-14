/*
Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div></div>
   <div></div>
</body>
</html>```
*/


const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en el medio!';

let positDiv = document.querySelectorAll('div');

document.body.insertBefore(pMiddle, positDiv[1]);

// OTRA FORMA
/*
 const pInTheMiddle = document.createElement('p');
pInTheMiddle.textContent = 'Voy en el medio!';
let positionDivs = document.querySelectorAll('div');
i = 0;
i = Match.round((positionDivs.lenght)/2); //Math.truc para que lo redonde
document.body.insertBefore(pInTheMiddle, positionDivs[1]);
*/