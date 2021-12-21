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

