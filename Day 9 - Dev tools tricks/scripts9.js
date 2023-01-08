const dogs = [
    {name: "Snickers", age: 2},
    {name: "hugo", age: 8}
]

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

console.log("normal");
console.log("Aquí puedo poner lo que %s", "papaya"); // "Aquí puedo poner lo que papaya
console.log("%c Soy un texto grande", "font-size: 25px; background: red"); // el texto se imprimirá en consola con las propiedades especificadas

console.table(dogs);

console.warn("Oh no :c");
console.error("Sh*t!");

console.info("Un cocodrilo se come unas 3-4 personas por año");

console.assert(1 === 1, "Se equivoca"); // no imprime nada
console.assert(1 === 2, "Se equivoca"); // imprime un error con el mensaje "Se equivoca"

const p = document.querySelector('p');
console.dir(p) // muestra una lista con atributos, métodos y demás de dicho objeto

dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`Hola, este es ${dog.name}.`);
	console.log(`${dogs.name} tiene ${dog.age} años.`);
	console.groupEnd(`${dog.name}`);
});

console.count('a'); // imrpime 1
console.count('a'); // imrpime 2
console.count('b'); // imrpime 1
console.count('a'); // imrpime 3

console.time("Esperando...");
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("Esperando...");
        console.log(data);
    });