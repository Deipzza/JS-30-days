const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'IIv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 }, 
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// 1. some
const isAdult = people.some(person => {if (new Date().getFullYear() - person.year >= 19) return true});

// Puede simplificarse como
// const isAdult = people.some(person => (new Date().getFullYear() - person.year >= 19));

console.log(isAdult);

// 2. every
const allAdults = people.every(person => (new Date().getFullYear() - person.year >= 19));

console.log(allAdults);

// 3. find
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

// 4. findindex y borrado
const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);

// Dos formas de borrar:
const newComments = [ // crear un nuevo array con todos los elementos del original excepto el elemento que se quiere eliminar
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];

comments.splice(index, 1); // realmente borrar el elemento

console.log(comments);
console.log(newComments);