//1
let nombre1: string | null = prompt("Entrez un nombre entier");
let nombre2: string | null = prompt("Entrez un autre nombre entier");

if (nombre1 !== null && nombre2 !== null) {
  let nombre1Num: number = parseInt(nombre1);
  let nombre2Num: number = parseInt(nombre2);
  console.log(nombre1Num + nombre2Num);
} else {
  console.log("Vous devez entrer deux nombres entiers.");
}

//2

function nombrePair(): void {
    for (let i = 0; i < 100; i++) {
      if (!(i % 2)) {
        console.log(i);
      }
    }
  }

//3
function nombreAleatoire(): void {
    const nombre : number = Math.random();
    console.log(nombre);
  }

  nombreAleatoire();

//4

function arrondirNombre(nombre: number): number {
    const arrondi = Math.round(nombre);
    console.log(arrondi);
    return arrondi;
  }

arrondirNombre(Math.PI);

// 5

const nombre: number = Math.floor(Math.random() * 1000);
const chiffreString: string | null = prompt("Entrez un chiffre");
const chiffre: number = chiffreString ? parseInt(chiffreString) : NaN;

if (!isNaN(chiffre)) {
  if (!(nombre % chiffre)) {
    console.log(`Le nombre ${nombre} est divisible par ${chiffre}`);
  } else {
    console.log(`Le nombre ${nombre} n'est pas divisible par ${chiffre}`);
  }
} else {
  console.log("Veuillez entrer un chiffre valide.");
}

//8

let petitTableau1: string[] = ["un", "deux", "trois"];

for (let i: number = 0; i < petitTableau1.length; i++) {
  console.log(petitTableau1[i]);
}

//10

let grandTableau: Array<number> = petitTableau1.concat(petitTableau2);