/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* const num1 = 8
const num2 = 11

if (num1 > num2) { console.log ("Tra i due numeri il maggiore è num1");}
else if (num2 > num1) { console.log ("Tra i due numeri il maggiore è num2");} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/



/* const x = 5
const y = 8


if (y !== 5) {
  "not equal"
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* const x = 25

if(x % 5 == 0) {
  console.log ("x è divisibile per 5")
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/



/* const x = 8
const y = 33

if (x == 8) {
  console.log ("x è uguale a 8")
} else if (y == 8) {
  console.log ("y è uguale a 8") 
} else if (y - x) {
  console.log ("La sottrazione di y meno x è uguale a 8")
} else if (x - y) {
  console.log ("La sottrazione di x meno y è uguale a 8") 
} else if (x + y) {
  console.log ("L' addizione di x più y è uguale a 8") 
} 
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* let totalShoppingCart = 20

if (totalShoppingCart > 50) {
  console.log ("Al cliente sarà addebitato solo il saldo totale del carrello")
} else if (totalShoppingCart < 50) {console.log("Al cliente sarà addebitato il saldo totale del carrello più 10 euro di spedizione ")} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

 /*let totalShoppingCart = 40

if (totalShoppingCart > 50) {
  console.log ("Al cliente sarà addebitato solo il saldo totale del carrello meno lo sconto del Black Friday:", (totalShoppingCart - ((totalShoppingCart / 100) * 20)))
} else if (totalShoppingCart < 50) {console.log("Al cliente sarà addebitato il saldo totale del carrello meno lo sconto del Black Friday e più 10 euro di spedizione", (totalShoppingCart - ((totalShoppingCart / 100) * 20) + 10))}
 


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/* let x = 2
let y = 88
let z = 16

let numeri = [x, y, z]

numeri.sort(function(a, b) {
  return a - b;
});

console.log(numeri) */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* const num = 9

console.log (typeof num) */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* const x = 120

if(x % 2 == 0) {
  console.log ("x è pari")}
  else {"x è dispari"}
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

    
/* let val = 7
  if ((val < 10) || (val < 5) || (val >= 10)) {
      console.log(true);} */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

console.log(me)
 */




/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"


delete me.lastName

console.log (me) */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/



/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

delete me.skills[2]

 console.log(me) */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/


 /*let array = []
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

console.log(array) 
*/

/*let array = []
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(array) */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

 /*let array = []

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

array[9] = 100

console.log(array) */
