const adminEmails = [
    "drill94@gmail.com",
    "trillionaire@gmail.com",
    "million03@gmail.com",
    "millionaire3@virgilio.it",
    "primusic@hotmail.com"
];
let loggedIn = false;

while (!loggedIn) {
    const usrLogin = prompt("Inserisci l'email per accedere.");

    if (adminEmails.includes(usrLogin)) {
        loggedIn = true;
        alert("Hai effettuato il login!");
    } else {
        alert("Email sbagliata.");
    }
}