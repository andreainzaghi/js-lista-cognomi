


var cognomi = ["bianchi","rossi","inzaghi","madrigali","basilico","schianto","losanghe","corvati"];
var inse =prompt("inserisci il tuo cognome");
inse=inse.toLowerCase();
    cognomi.push(inse);
document.getElementById("demo").innerHTML = cognomi;
cognomi.sort();
document.getElementById("demo").innerHTML = cognomi;
document.getElementById("demos").innerHTML =  "la posizione in lista del tuo cognome e' : " + cognomi.indexOf(inse);
// console.log(['🥚','🐔'].sort()[0] + ' was first!')
