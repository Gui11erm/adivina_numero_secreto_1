const readline = require('readline-sync')

const comprobacionNumeroUsuario = (numeroUsuario, numeroAleatorio) =>{
    // Mientras numeroUsuario no sea igual al numeroAleatorio, se repetira el bucle
    while(numeroUsuario != numeroAleatorio) {
        // Si el numero ingresado es menor a 1, mayor a 100, o null se imprimira una alerta donde el usuario tendra que volver a ingresar un numero
        if (numeroUsuario > 100 || numeroUsuario < 1) {
        numeroUsuario = readline.question(
            "Numero no valido! Tiene que ingresar un numero entre 1 y 100: "
        );
        } else {
        numeroUsuario = readline.question(`El numero ${numeroUsuario} no es el numero secreto, vuelva a intentarlo: `)
        }
    }
    
    // Si el usuario acierta, termina el juego con un mensaje felicitando al usuario
    console.log(`\n¡¡ Felicitaciones, acertaste!!\nEl numero secreto era el ${numeroUsuario}.\n`)
};

module.exports = {
    comprobacionNumeroUsuario
};