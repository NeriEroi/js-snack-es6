// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function conTreArgomenti(array, num1, num2) {
    let richiestaNumero1 = parseInt(prompt("Inserisci il primo numero: "));
    let richiestaNumero2 = parseInt(prompt("Inserisci il secondo numero: "));
    num1 = richiestaNumero1;
    num2 = richiestaNumero2;
    console.log(
        `
        Il primo numero che hai inserito è ${num1}
        `
    );
    console.log(
        `
        Il secondo numero che hai inserito è ${num2}
        `
    );
    array = [];
    array.push(num1, num2);
    console.log(
        `
        L'array di numeri che hai generato è: [${array}]
        `
    );

    let newArray = array.map((numero) => {
        return numero * numero
    });

    console.log(newArray);
    
}

conTreArgomenti();



