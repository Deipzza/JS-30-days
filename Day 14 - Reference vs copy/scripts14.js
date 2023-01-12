// Números, strings y booleanos
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);

// Arreglos
const players = ["David", "Luis", "Laura", "Felipe", "Santiago"];
const team1 = players.slice();
console.log(players, team1);

team1[3] = "Simón";
console.log(players, team1);

const team2 = [].concat(players)
team2[3] = "Simón";
console.log(players, team2);

const team3 = [...players];
team3[3] = "Simón";
console.log(players, team3);

// Objetos
const person = {
    name: "David Pérez",
    age: 40
};

const radiant = person;
console.log(person, radiant);
radiant.age = 99;
console.log(person, radiant);

const person_2 = {
    name: "David Pérez",
    age: 40
};

const radiant_2 = Object.assign({}, person_2, {age: 99});
console.log(person_2, radiant_2);

const radiant_3 = {...person_2};
radiant_3.age = 99;
console.log(person_2, radiant_3);

const person_3 = {
    name: "David Pérez",
    age: 40,
    social: {
        twitter: "@aaa",
        facebook: "aaa.aaa"
    }
};

const radiant_4 = JSON.parse(JSON.stringify(person_3));
radiant_4.social.twitter = "@bbb";
console.log(person_3, radiant_4);