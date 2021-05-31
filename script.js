var askMail = prompt("Inserisci la tua mail");
var databaseMail = ["ottavio@gmail.com", "davide@gmail.com", "alfredo@gmail.com"];
if (askMail === databaseMail) {
    document.getElementById("welcome").innerHTML = "benvenuto"
} else {
    prompt("Mail non presente")
}