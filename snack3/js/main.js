// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// function conTreArgomenti(array, num1, num2) {
//     let richiestaNumero1 = parseInt(prompt("Inserisci il primo numero: "));
//     let richiestaNumero2 = parseInt(prompt("Inserisci il secondo numero: "));
//     num1 = richiestaNumero1;
//     num2 = richiestaNumero2;
//     console.log(
//         `
//         Il primo numero che hai inserito è ${num1}
//         `
//     );
//     console.log(
//         `
//         Il secondo numero che hai inserito è ${num2}
//         `
//     );
//     array = [];
//     array.push(num1, num2);
//     console.log(
//         `
//         L'array di numeri che hai generato è: [${array}]
//         `
//     );

//     let newArray = array.map((numero) => {
//         return numero * numero
//     });

//     console.log(newArray);
    
// }

// conTreArgomenti();

const arrayDiNumeri = [1,2,3,4,5,6,7,8,9,10];
let primoNumero;
let secondoNumero;

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

do {
    primoNumero = randomNumber(1,10);
    secondoNumero = randomNumber(1, 10);
} while (primoNumero > secondoNumero);

console.log(arrayDiNumeri);
console.log("Il primo numero è: " + primoNumero, " / ", "Il secondo numero è: " + secondoNumero);

let arrayDiNumeriCompresi = arrayDiNumeri.filter((element, i) => {
    if (i >= primoNumero && i < secondoNumero - 1) {
        return true
    }
    return false;
});

console.log(arrayDiNumeriCompresi);