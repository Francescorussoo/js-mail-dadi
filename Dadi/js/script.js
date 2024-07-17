alert("Sto tirando due dadi.");

const dadoUno = Math.floor(Math.random() * 6) + 1;
const dadoDue = Math.floor(Math.random() * 6) + 1;

alert("Dado 1: " + dadoUno + "\nDado 2: " + dadoDue);

if (dadoUno === dadoDue) {
    alert("È un pareggio!");
} else if (dadoUno > dadoDue) {
    alert("Il dado 1 con il numero '" + dadoUno + "' ha vinto!");
} else {
    alert("Il dado 2 con il numero '" + dadoDue + "' ha vinto!");
}
