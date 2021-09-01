// creare un array di oggetti 

const arrayBici = [
    {
        nome: "Bike1",
        peso: 80
    },
    {
        nome: "Bike2",
        peso: 90
    },
    {
        nome: "Bike3",
        peso: 70
    },
];


// Stampare a schermo la bici con peso minore.

let biciLeggera = arrayBici[0];

for (let i = 0; i < arrayBici.length; i++) {
    // console.log(arrayBici[i]);

    if (arrayBici[i].peso < biciLeggera.peso) {
        biciLeggera = arrayBici[i];
    }
    
}

console.log(biciLeggera);



// stampa bici peso minore 
const {peso} = biciLeggera;
// con destructuring
console.log("la bici più leggera pesa " + peso + " kg");
// con template literal
console.log(
    `
    la bici più leggera pesa ${peso} kg
    `
);




