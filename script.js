var tekst = "Witaj";

let liczba = 4;

const imie = "Igor";

liczba = 7;

console.log(tekst + " " + liczba + " " + imie);

// Pobieranie wartości od użytkownika

//const nazwa = prompt("Podaj imie: ");
//alert("Dzień dobry " + nazwa);

//const liczba1 = Number(prompt("Podaj liczbe 1: "));
//const liczba2 = Number(prompt("Podaj liczbe 2: "));

//console.log("Suma wynosi: " + (liczba1 + liczba2));

//let wynik = liczba1 * liczba2;

//wynik++;
//wynik += 10;
//console.log("Mnożenie: " + ++wynik);

// zwykła funkcja
function start(){
  alert("Hello");
}

//funkcja strzałkowa
const startArrow = () => {
  alert("Hello");
}

// funkcje ze zwracaniem wartości
const checkAlko = () =>{
  const age = Number(prompt("Ile masz lat? "));
  if(age >= 18)
  {
    return "Możesz kupić alkohol";
  }
  else
  {
    return "Nie możesz kupić alkoholu";
  }
}

const sumuj = () => 4+10;

const setDiv = (w, h) => {
  document.getElementById("mietek").style.height = h;
  document.getElementById("mietek").style.width = w;
}

function name()
{
  alert("Dzień dobry " + arguments[0] + " "  + arguments[1]);
}


//const nameArrow = () => alert("Dzien dobry " + arguments[0] + " "+ arguments[1]);

function blueMod()
{
  for(let i=0; i < arguments.length; i++){
  arguments[i].style.backgroundColor = "blue";
  }
}

const object1 = document.querySelector("#i1");
const object2 = document.querySelector("#i2");
const object3 = document.querySelector("#i3");

blueMod(mietek, object1, object2, object3);

// OBIEKTY 

const person = {
  name: "Igor",
  surname: "Olszewski",
  year: 2001,
  family: ["Zuzia", "Wiktor", "Ala"],
  isDiverLicense: true,
  getAge: function(){
    this.age = 2021 - this.year;
  }
}

console.log(person);
alert(person.surname);
alert(person["name"]);
person.getAge()
console.log(person.age);