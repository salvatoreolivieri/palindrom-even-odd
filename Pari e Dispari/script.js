/* 

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri.

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/


/* Logica:
  1. Ottieni le stringhe o i numeri dall'utente.
  2. Creiamo una funzione che genera numeri random da 1 a 5
  3. Sommiamo i due numeri
  4. Creiamo una funzione che determina se la somma è pari o dispari e creiamo delle condition if che determino il vincitore
*/ 


//1. Ottieni le stringhe o i numeri dall'utente.

const userPlayer = prompt("Pari o dispari?");
const userNumber = parseInt((prompt("Inserisci un numero da 1 a 5")));

console.log("L'utente ha selezionato:", userPlayer);
console.log("User Number:", userNumber);


//2. Creiamo una funzione che genera numeri random da 1 a 5

function getRandomNumber(max , min) {
  return Math.floor(Math.random() * (max)) + min;
}

const pcNumber = (getRandomNumber(5,1)); 
console.log("pc Number:", pcNumber);


// 3. Sommiamo i due numeri

function somma(number1, number2) {
  const sum = number1 + number2;
  return sum;
}

const sum = somma(userNumber, pcNumber);
console.log("Somma:", sum);


// 4. Creiamo una funzione che determina se la somma è pari o dispari e creiamo delle condition if che determino il vincitore

function pariDispari (){
  if (sum % 2 && userPlayer === "pari") {
    return "dispari: Hai perso"
  } else {
    return "pari: Hai vinto"
  }
}

console.log(pariDispari());




// BONUS

const btnConferma = document.querySelector('#conferma');

btnConferma.addEventListener("click", function(){
  const userPlayer = document.getElementById("userPlayer").value;
  const userNumber = parseInt(document.getElementById("numberUser").value);
  console.log("User Number:", userNumber);

  function getRandomNumber(max , min) {
    return Math.floor(Math.random() * (max)) + min;
  }
  
  const pcNumber = (getRandomNumber(5,1)); 
  console.log("pc Number:", pcNumber);

  function somma(number1, number2) {
    const sum = number1 + number2;
    return sum;
  }
  
  const sum = somma(userNumber, pcNumber);
  console.log("Somma:", sum);

  function pariDispari (){
    if (sum % 2 && userPlayer === "pari") {
      return "dispari: hai perso"
    } else {
      return "pari: hai vinto"
    }
  }
  
  console.log(pariDispari());

})