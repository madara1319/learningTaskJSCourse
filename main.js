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

//zadania z petli

let numbersSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    numbersSum += i;
    // console.log(`Indeks ${i} a suma wynosi ${numbersSum}`);
  }
}
console.log(
  `Suma wszystkich liczb parzystych od 1 do 100 wynosi ${numbersSum}`
);

for (let j = 0; j <= 6; j++) {
  console.log("*".repeat(j));
}

const h = 5;

for (let i = 1; i <= h; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

let k = 0;
let sumNumbers = 0;
while (k <= 50) {
  if (k % 3 == 0 && k != 0) {
    sumNumbers += 1;
    console.log(`indeks wybosi ${k} a ilosć ${sumNumbers}`);
  }
  k++;
}
console.log(
  `Ilość liczb podzielnych przez 3 dla zbioru od 0 do 50 wynosi ${sumNumbers}`
);
//zadania z funkcji

function calculateAverage(...numbers) {
  let numbersSum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  // numbersSum += numbers[i];
  // }
  numbers.forEach((number) => {
    numbersSum += number;
  });
  return numbersSum / numbers.length;
}

function filterEvenNumbers(...numbers) {
  let evenNumbers = [];
  // for (let i=0; i<numbers.length; i++)
  // {
  // if(numbers[i]%2===0)
  // {
  // evenNumbers.push(numbers[i]);
  // }
  //
  // }
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  console.table(evenNumbers);
}

function countOccurences(element, ...array) {
  let elementOccurence = 0;
  // for (let i=0; i<array.length; i++)
  // {
  // if (array[i]===element)
  // {
  // elementOccurence+=1;
  // }
  // }
  array.forEach((arrayElement) => {
    if (arrayElement === element) {
      elementOccurence += 1;
    }
  });
  return elementOccurence;
}
