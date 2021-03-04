


var cognomi = ["bianchi","rossi","inzaghi","madrigali","basilico","schianto","losanghe","corvati"];
var inse =prompt("inserisci il tuo cognome");
inse=inse.toLowerCase();
    cognomi.push(inse);
document.getElementById("demo").innerHTML = cognomi;
cognomi.sort();
document.getElementById("demo").innerHTML = cognomi;
// soluzione1
document.getElementById("demos").innerHTML =  "la posizione in lista del tuo cognome e' : " + cognomi.indexOf(inse);
// soluzione2
// var i =0;
// var trovato =false;
// while (i < cognomi.lenght && trovato == false ) {
//   if (cognomi[i]==cognome){
//     trovato =true;
//   }
//   i++;
// }
// if (trovato == true){
//   consol.log(i);
// }
// console.log(['🥚','🐔'].sort()[0] + ' was first!')
