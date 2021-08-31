// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


let teams = [
    {
        nome: "Genoa",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Venezia",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    }
];


// Generare numeri random al posto degli 0 nelle proprietà:

// punti fatti:
let randomPuntiFatti = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < teams.length; i++) {
    teams[i].puntiFatti = randomPuntiFatti
};


// falli subiti:    
let randomFalliSubiti = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < teams.length; i++) {
    teams[i].falliSubiti = randomFalliSubiti;
}

console.log(teams);


// usando la destrutturazione creiamo un nuovo array 
let [teamOne, teamTwo, teamThree, teamFour, teamFive] = teams;

// // i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

for (let i = 0; i < teams.length; i++) {
    console.log("Nome squadra: " + teams[i].nome + " / " + "Falli subiti: " + teams[i].falliSubiti)
}



