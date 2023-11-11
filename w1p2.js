/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
Pensa ai data type come a dei cibi diversi. Noi possiamo cucinare con i salumi, con i formaggi, con la pasta, con le verdure. 
In javascript possiamo "cucinare" usando i Numeri, le Stringhe, i Booleani, undefined e null ! 
Conta che possiamo usare gli stessi contenitori per contenere questi cibi : in una ciotola mettiamo formaggi oppure della verdura. 
Grazie ai diversi "cibi" di javascript possiamo fare cose diverse. Devi creare qualcosa di matematico ? Usa i numeri. Devi creare del testo ? Usa le stringhe. 
Devi creare un risultato vero o falso ? Usa i booleani.
Mentre l'array è come del cibo che ha più parti, come le uova, che hanno il tuorlo, l'albume e il guscio. Contiene quindi tutti e tre ma possiamo usarli anche uno per uno. 
L'oggetto invece è come una torta con diversi strati. C'è la crema, l'impasto, il cioccolato. Fanno sempre parte della torta sono diversi.
In questo modo abbiamo tutti i tipi di dato diversi, per le diverse ricette che dobbiamo creare !

*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

*/

/* SCRIVI QUI LA TUA RISPOSTA


 Un oggetto è un tipo di dato che fa da contenitore ad un qualsiasi numero di altri dati o variabili. 
 Ad ogni dato contenuto nell'oggetto assegni una chiave. In questo modo, se prendi una chiave, potrai accedere al dato contenuto nell'oggetto !
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let mySum = 12+20


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Vincenzo"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

console.log(name1 === name2 )

console.log(name1 === name2.toLowerCase()) 