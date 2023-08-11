console.log("Siema");

//typ danych number
let myVariable = 10;
console.log("Moja liczba " + myVariable + " Jest typu " + typeof myVariable);

let myName = "Benedykt";
console.log("Moj string " + myName + " Jest typu " + typeof myName);

myVariable = 11;
myName = "Mieszko";
sum = myVariable + 5;
greeting = myName + " ,witaj w świecie JS!";
console.log(sum);
console.log(greeting);
const boxBlock = document.querySelector(".box");

const Header = document.querySelector(".main--header");
Header.innerHTML = "Nagłóweczeeek";
boxBlock.innerHTML = "Bloczek";
//zadania z instrukcji warunkowych i tablic
const number = [5, 10, 15];

if (number[0] + number[number.length] > number[1]) {
  console.log(
    "Suma pierwszego i ostatniego elementu jest większa niż drugi element"
  );
} else {
  console.log(
    "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element"
  );
}

const firstArray = [1, 2, 3];
const secondArray = [4, 5, , 2, 2];

if (firstArray.length > secondArray.length) {
  console.log("Pierwsza tablica jest dłuższa");
} else if (firstArray.length < secondArray.length) {
  console.log("Druga tablica jest dłuższa");
} else {
  console.log("Są równe");
}

const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];

if (fruits[0] == "apple") {
  console.log("Pierwszy element tablicy to 'apple'");
} else {
  console.log("Pierwszy element tablicy to nie apple");
}
if (fruits_v2[0] == "apple") {
  console.log("Pierwszy element tablicy to 'apple'");
} else {
  console.log("Pierwszy element tablicy to nie apple");
}
Header.addEventListener("click", () => {
  alert("NIE KLIKAJ TEGOO");
});
