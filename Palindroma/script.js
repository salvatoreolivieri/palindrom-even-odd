// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma


/* Logica
  1. Ottieni le stringhe o i numeri dall'utente.
  2. Funzione che capovolge la stringa
  3. Funzione check palindromo che confronta la stringa presa dall'utente con quella rovesciata
*/


// 1. Ottieni le stringhe o i numeri dall'utente

const word = prompt("Inserisci una parola")


// 2. Funzione che capovolge la stringa
function reverseString (string) {

  let splitString = string.split("");

  let reverseArray = splitString.reverse();

  let RecreateArray = reverseArray.join("");

  return RecreateArray;

} 

console.log(reverseString(word));


// 3. Funzione check palindromo che confronta la stringa presa dall'utente con quella rovesciata

function checkPalindromo (string) {

  if (reverseString(word) === word) {
    return console.log("è palindromo");
  } else {
    return console.log("Non è palindromo");
  }

}

console.log(checkPalindromo());


// BONUS

const btnConferma = document.querySelector("#conferma")

btnConferma.addEventListener("click", function(){

  const word = document.getElementById("word").value;
  console.log(word);


  function reverseString (string) {

    let splitString = string.split("");

    let reverseArray = splitString.reverse();

    let RecreateArray = reverseArray.join("");

    return RecreateArray;
  } 

  console.log(reverseString(word));


  function checkPalindromo (string) {

    if (reverseString(word) === word) {
      return console.log("è palindromo");
    } else {
      return console.log("Non è palindromo");
    }
  
  }

  console.log(checkPalindromo());



})
