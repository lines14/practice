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

// let id = Symbol('id');
// console.log(id)

// if (true) {
//     var test = true; // используем var вместо let
// }
// console.log(test);

// const func1 = function() {
//     let count = 0;
//     function inner() {
//         ++count;
//     }
//     inner();
//     return count;
// }
    
// const func2 = function() {
//     let count = 0;
//     return inner = function() {
//         return ++count;
//     }
// }

// const counter = func2();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const filter = (arr) => arr.filter( item => !!item === false );
// console.log(filter([false, undefined, 0, 1, 'str']));

function upperize(target, key, descriptor) {
    descriptor.value = function(arg) {
        return arg.toUpperCase();
    }
}
class Cat {
    @upperize
    static kek(name) {
        return name;
    }
}

console.log(Cat.kek('hello'));