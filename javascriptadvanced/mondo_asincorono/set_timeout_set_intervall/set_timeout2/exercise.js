// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla
// rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che 
// indica che il conto alla rovescia è terminato.

let tempoRimanente = 10;

console.log("Conto alla rovescia in corso...");

function contoAllaRovescia() {
    tempoRimanente--
    console.log(tempoRimanente)

}
let idTempo = setInterval(contoAllaRovescia, 1000);

setTimeout(()=> { 
   clearInterval(idTempo);
   console.log("Il conto alla rovescia è terminato")
},11000);




