// const object1 = {
//     a: 'somestring',
//     b: 42
// };


// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// };

// for (const key of Object.keys(object1)) {
//     console.log(`${key}`);
// };

// for (const value of Object.values(object1)) {
//     console.log(`${value}`);
// };
    

// console.log(Object.entries(object1))

// console.log(Object.keys(object1))

// function repeat(text, count) {
//     let str = text;
//     for (let i = 0; i < count; i++) {
//       str = str+str;
//     }
//     return str;
// }
// console.log(repeat('a', 3));

// function repeat(text, count) {
//     let i=0;
//     const arr = new Array();
//     while (i<count) {
//         arr.push(text);
//         i++;
//     }
//     return arr.join('');
// }
// console.log(repeat('a', 3));

// function getGreetingPhrase(name) {
//     return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
// }

// console.log(getGreetingPhrase('Mike'));
// console.log(getGreetingPhrase());

// let arr = [1, 'kek'];
// console.log(arr);

// const getHiddenCard = (a, b = 4) => {
//     return '*'.repeat(b)+(a.slice(12));
// }

// console.log(getHiddenCard('1234567812345678', 2));

// const fruits = ['banana','mango', 'apple'];
// const upperFruits = fruits.map((name) => name.toUpperCase());
// console.log(upperFruits);

// const numbers = [1, 3, 8, 9, 100, 23, 55, 34];
// const even = numbers.filter(num => num%2 === 0);
// console.log(even);

let id = Symbol('id');
console.log(id)