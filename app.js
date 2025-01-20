// Declaración de variables: número secreto y número ingresado por el usuario
let numeroMaximoPosible = 100; // Rango máximo definido
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1; // Genera un número entre 1 y numeroMaximoPosible
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 7; // Número máximo de intentos
let palabraVeces = 'vez'; // Inicializa la variable correctamente

while (numeroUsuario != numeroSecreto) {
    // Solicita al usuario un número y lo almacena en 'numeroUsuario'
    numeroUsuario = parseInt(prompt(`Me puedes indicar un número entre 1 y ${numeroMaximoPosible}, por favor:`));

    // Valida si el usuario ingresó un número válido
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }

    // Validación: compara el número ingresado con el número secreto
    if (numeroUsuario === numeroSecreto) {
        alert(`¡Acertaste el número! El número era: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}.`);
        break; // Finaliza el juego
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }

        // Incrementa el contador de intentos
        intentos += 1;

        // Ajusta el texto según la cantidad de intentos
        palabraVeces = intentos > 1 ? 'veces' : 'vez';

        // Verifica si se alcanzó el máximo de intentos
        if (intentos > maximosIntentos) {
            alert(`Llegaste al máximo de ${maximosIntentos} intentos. El número secreto era ${numeroSecreto}.`);
            break;
        }
    }
}
