
### Function N°1 :

la code original : 

```js
// 1 - A l'aide des boites de dialogue du navigateur, créez un console.log qui réalise l'addition de deux nombres entiers entrés par l'utilisateur.
var nombre1 = prompt("Entrez un nombre entier");
var nombre2 = prompt("Entrez un autre nombre entier");
console.log(nombre1 + nombre2); // erreur : il faut convertir les chaînes de caractères en nombres
```

Version corrigée : 

```ts 
let nombre1: string | null = prompt("Entrez un nombre entier");

let nombre2: string | null = prompt("Entrez un autre nombre entier");

  

if (nombre1 !== null && nombre2 !== null) {

let nombre1Num: number = parseInt(nombre1);

let nombre2Num: number = parseInt(nombre2);

console.log(nombre1Num + nombre2Num);

} else {

console.log("Vous devez entrer deux nombres entiers.");

}
```

Explication  : 

Comme le code dépend de la saisie d'un utilisateur, j'ai utilisé TypeScript pour anticiper des saisies différentes, y compris "Null". Sachant que la fonction prompt() renvoie une valeur de type "string", j'ai utilisé la méthode parseInt() afin d'éviter d'affecter des opérations mathématiques qui pourraient renvoyer "undefined, finalement j'ai ajouter un console.log pour faire rappel au respect des consignes. 

---
### Function N° 2 : 

la code original : 

``` js
// 2 - Réalisez une fonction "nombrePair" qui affiche dans la console les nombres pairs de 0 à 100.
function nombrePair() {
  for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
```

Version corrigée : 

```ts
function nombrePair(): void {

for (let i = 0; i < 100; i++) {

if (!(i % 2)) {

console.log(i);

      }

   }

}
```

Explication : 

j'ai profité que Javascript a cette "avantage" des valeurs "[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)" afin d’éviter la galéré d’utiliser "[#Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)"   .

---

## Function N°3:

la code original :

```js
// 3 - Créez une fonction qui génère un nombre entre 0 et 1 dans la console.
function nombreAleatoire() {
  var nombre = Math.random(); // code manquant : il faut appeler la fonction Math.random()
  console.log(nombre);
}
```

Version corrigée : 
``` ts
function nombreAleatoire(): void {

const nombre : number = Math.random();

console.log(nombre);

}

nombreAleatoire();
```

Explication : 
J'ai évoqué la fonction.

---

### Function N°4:

la code original: 

```js
// 4 - Trouvez comment arrondir ce nombre et affichez le.
function arrondirNombre(nombre) {
  var arrondi = Math.round(nombre); // code non fonctionnel : il faut passer le nombre en paramètre de la fonction Math.round()
  console.log(arrondi);
}
```

Version corrigée : 

```ts
function arrondirNombre(nombre: number): number {

const arrondi = Math.round(nombre);

console.log(arrondi);

return arrondi;

}

  

arrondirNombre(Math.PI);
```


---

## Function N°5:

la code original: 

```js
// 5 - Générez un nombre entre 0 et 1000, demandez un chiffre à l'utilisateur et affichez dans la console si votre nombre est divisible par le chiffre de l'utilisateur.
var nombre = Math.floor(Math.random() * 1000); // code manquant : il faut utiliser la fonction Math.floor() pour obtenir un nombre entier
var chiffre = prompt("Entrez un chiffre");
if (nombre % chiffre == 0) {
  console.log("Le nombre " + nombre + " est divisible par " + chiffre);
} else {
  console.log("Le nombre " + nombre + " n'est pas divisible par " + chiffre);
}
```

Version corrigée :

```ts
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

```

Explication : 

À l'aide de Typescript j'ai vérifié la saisie d’utilisateur et le parseInt en utilisant [conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator), en suite if's pour le logique de fonction.

---

## Function N°8:

la code original:

```js
// 8 - Faites une boucle qui affiche le contenu du tableau js "petitTableau1" dans la console
var petitTableau1 = ["un", "deux", "trois"];
for (var i = 0; i < petitTableau1.length; i++) {
  console.log(petitTableau1[i]);
}

```

Version corrigée : 

```ts
let petitTableau1: string[] = ["un", "deux", "trois"];

for (let i: number = 0; i < petitTableau1.length; i++) {
  console.log(petitTableau1[i]);
}
```

Explication :

Encore un fois Typescript fait en sort que i défini comme une nombre et le table est défini comme une string, donc ça rende le code moins "error-prone" .


## Function N°10:

la code original:

```js
// 10 - Créez une variable "grandTableau" et insérez y le contenu des deux petits tableaux précédents
var grandTableau = petitTableau1.concat(petitTableau2); // code non fonctionnel : il faut utiliser la méthode concat() pour fusionner les deux tableaux
console.log(grandTableau);
```

Version corrigée :

```ts
let grandTableau: Array<number> = petitTableau1.concat(petitTableau2);
```

À savoir

```ts
const grandTableau = [...petitTaleau1, ...petitTableau2];
consle.log(grandTableau);
```

Explication: 

En utilisant le [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) mais il faut faire attention à la [Immutability](https://developer.mozilla.org/en-US/docs/Glossary/Immutable).
