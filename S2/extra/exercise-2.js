//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos //favoritos que tienen
 //los usuarios.


const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos //favoritos que tienen
 //los usuarios.

 let volumes = [];

// Recorrer el array de usuarios
for (const user of  users){
    // Para cada usuario recorremos favoritesSounds
    for (const soundType in user.favoritesSounds){
        // Añadimos cada volumen al array de volumenes
        const volume = user.favoritesSounds[soundType].volume;
        volumes.push(volume);
    }
}

// cálculo manual
let sumVolumes = 0;
for (const volume of volumes ){
    sumVolumes += volume;
}
const averageVolume = sumVolumes / volumes.length;
console.log(averageVolume);

// cálculo con reduce
const avg = volumes.reduce((acc, cur) => acc + cur)  / volumes.length;
console.log(avg);