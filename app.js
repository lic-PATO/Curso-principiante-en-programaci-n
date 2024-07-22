let numeroSecreto = Math.floor(Math.random()*10)+1;
let miNumero = 0;
let intentos = 1;
//let vezVeces = 'vez';
let maxIntentos = 3;
console.log(numeroSecreto);
alert(`Tienes ${maxIntentos} ${intentos == 1 ? 'intento.' : 'Intentos.'}`);
while (numeroSecreto != miNumero ) {
    if (intentos > maxIntentos) {
        alert('Lo siento. Superaste tus ' + maxIntentos + ' intentos permitidos.' + ` El numero secreto era: ${numeroSecreto}.`);
        break;
    }
    
        miNumero = parseInt(prompt('Ingrese un numero entre 1 y 10.'));
        console.log(typeof(miNumero));
        /*
        toda esta parte es solo un comentario
        no va a correr en el codigo
        */
       
        if (miNumero > 10) {
            alert('Ingrese un numero valido');
        } else {
            if (numeroSecreto == miNumero) {
                alert(`Acertaste el numero!! Te tomó ${intentos} ${intentos == 1 ? 'intento.': 'intentos.'}`);
            } else {
                if (numeroSecreto > miNumero){
                    alert('El numero es mayor que ' + miNumero + '.');
                } else{
                    alert('El numero es menor que ' + miNumero + '.');
                }
                //alert('Lo siento, el numero era ' + numeroSecreto);
                //intentos = intentos + 1;
                intentos++;
                // vezVeces = 'veces';
            }   
        }
   } 