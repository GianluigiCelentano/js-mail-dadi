var askMail = prompt("Inserisci la tua mail");
var databaseMail = ["ottavio@gmail.com", "davide@gmail.com", "alfredo@gmail.com"];
var check = false
for (var i = 0; i < databaseMail.length; i++){
    if(askMail === databaseMail[i]){
        check = true;
    }
}
if(check === true) {
    alert ("Puoi giocare")
} else {
    alert ("mail non presente")
}
if(check === true) {
    var computer = [1,2,3,4,5,6]
    var utent = [1,2,3,4,5,6]
    var randomComputer = computer[Math.floor(Math.random()*computer.length)]
    var randomUtent = utent[Math.floor(Math.random()*utent.length)]
    document.getElementById("computer").innerHTML += randomComputer
    document.getElementById("utent").innerHTML += randomUtent
}
if (randomComputer > randomUtent) {
    document.getElementById("winner").innerHTML += "Ha vinto il computer"
} else if (randomComputer < randomUtent) {
    document.getElementById("winner").innerHTML += "Hai vinto"
}