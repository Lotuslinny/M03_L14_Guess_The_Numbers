//Opdracht Guess the Number!
//1 prompt gebruiken. Welkomsbericht plus naam uitkomst na input van gebruiker naam.
let firstName = prompt(`Welkom! Wat is jouw naam?`, ``);

// Ik wil dat de gebruiker een bericht krijgt na het invoeren van zijn naam.
alert(`Hey ${firstName} !`);



// Nieuwe input getal van 0 tot 25.
const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const guessNumber = getRandomInt(25);

//alternatief zonder function: //const guessNumber = Math.floor(Math.random() * Math.floor(25));

// Stel eerste vraag om nummer
let question = prompt(`Voer een nummer in van 0 tot 25 om te beginnen met raden.`);
// initialiseer i = aantal toegestane pogingen
let i = 0;
//zolang als question niet gelijk is aan het te raden nummer, voer de loop uit
// OF
// als er meer dan 5 (...i != 4 omdat je hierboven al een keer gevraagd hebt.) 
//keer geraden is, stop dan ook de loop
while ((question != guessNumber) && i != 4) {
  // stel de vraag weer
  question = prompt(`Fout, probeer opnieuw! Voer een nummer in van 0 tot 25 om te 
  beginnen met raden.`);
  // tel 1 op bij het aantal pogingen
  i++;
}
if (i == 4) {
  alert(`Oof, je hebt al je pogingen verspild. \ Het spel is afgelopen!`);
} else {
  alert(`Goed geraden! \ Het spel is afgelopen!`);
}









