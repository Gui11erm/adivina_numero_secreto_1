const readline = require('readline-sync');
const {generarNumeroAleatorio} = require('./generar_numero');
const {comprobacionNumeroUsuario} = require('./comprobacion');


const ejecutarJuegoNumeroSecreto = () => {
    
    console.log(`\n\nBienvenidos al juego del numero secreto!\nIntenta adivinar cual es el numero!\n`)

    const numeroAleatorio = generarNumeroAleatorio(); 
    console.log(numeroAleatorio); // console.log para ver el numeroAleatorio para test

    let numeroUsuario = readline.question("Adivina el numero secreto ingresando un numero entre 1 al 100: ");
    comprobacionNumeroUsuario(numeroUsuario, numeroAleatorio);
}

ejecutarJuegoNumeroSecreto();