let dificultad = parseInt(prompt('Escoge el nivel de dificultad. Digita un numero entre el 1 y el 3:'));
let nivelDificultad = 1;
let maxIntentos = 1;
let intentos = 1;
let miNumero = 0;
if(dificultad == 1){
    nivelDificultad = 10;
    maxIntentos = 3;
} else if(dificultad == 2){
    nivelDificultad = 100;
    maxIntentos = 5;
} else if (dificultad == 3){
    nivelDificultad = 1000;
    maxIntentos = 15;
} else{
    alert('Ingrese un numero correcto.');
    location.reload();
}
let numSecreto = Math.floor(Math.random()*nivelDificultad);

console.log(dificultad);
console.log(numSecreto);
alert(`Tienes ${maxIntentos} intentos para acertar el numero.`);
while(miNumero != numSecreto){
    if(intentos > maxIntentos){
        alert('Lo siento. Has superado el limite maximo de intentos.');
        alert(`El numero secreto era ${numSecreto}`);
        break;
    }
    let miNumero = parseInt(prompt(`Ingresa un numero entre 1 y ${nivelDificultad}`));
    console.log(miNumero);
    if(miNumero > nivelDificultad || miNumero <= 0){
        alert('Por favor, ingrese un numero valido.');
    } else {
        if(miNumero == numSecreto){
            alert(`Acertaste!! El numero secreto era ${numSecreto}.`);
            alert(`Te tomo ${intentos} ${intentos == 1 ? 'intento. ' : 'intentos.'}`);
            break;
        } else {
            if(numSecreto > miNumero){
                alert('El numero es mayor que ' + miNumero + '.');
                } else {
                    alert('El numero es menor que ' + miNumero + '.');
                }
            }
        }
        intentos++;
    }