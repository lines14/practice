// class Person {

//     name;
  
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}`);
//     }
  
// }
// class Student extends Person {

//     #year;

//     constructor(name, year) {
//     super(name);
//     this.#year = year;
//     }


//     introduceSelf() {
//     console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//     }

//     canStudyArchery() {
//     return this.#year > 1;
//     }

// }

// const summers = new Student('Summers', 2);

// summers.introduceSelf();
// summers.canStudyArchery();

// summers.#year;

// let a = [1,2,3,4,5];

// a = {
//   kek: 1,
//   kok: 2,
//   kuk: 3
// }

// for (let i in a) {
//   console.log(a[i])
// }

// let b = [1,2,3,4,5];

// for (let i of b) {
//   console.log(i)
// }

// let a = new Map();
// a[[1,2,3]] = 1;
// a['lel'] = 2;
// a[true] = 3;
// (Object.keys(a)).map(el => console.log(el));


// let userAdmin = {
//   admin() {
//     console.log("Я админ");
//   }
// };

// let userGuest = {};

// userAdmin.admin(); // Я админ

// userGuest.admin?.(); // ничего не произойдет (такого метода нет)

// const createArray = (length, x, y) => Array.from({ length: length }, () => Math.floor(Math.random() * (Math.max(x, y) - Math.min(x, y) + 1) + Math.min(x, y)));

// console.log(createArray(10, 1, 10));

// const createArr = (length, minNum, maxNum) => Array.from({length:length}, () => Math.floor(Math.random() * (Math.max(minNum, maxNum) - Math.min(minNum, maxNum) + 1) + minNum));

// console.log(createArr(10, 1, 10));

// let age = 19;
// let isAdult = age > 18 ? 'Yes' : 'No';
// console.log(isAdult);

// function sayHiBye(firstName, lastName) {
//     return function getFullName() {
//         return 'Hello' + " " + firstName + " " + lastName;
//     }
//     // console.log("Hello, " + getFullName());
//     // console.log("Bye, " + getFullName());
// }

// let kek = sayHiBye('kek', 'kok');
// console.log(kek());

// function sayHiBye(firstName, lastName) {
//     return function getFullName() {
//         return 'Hello' + " " + firstName + " " + lastName;
//     }
//     // return getFullName();
//     // console.log("Hello, " + getFullName());
//     // console.log("Bye, " + getFullName());
// }

// let kek = sayHiBye('kek', 'kok');
// console.log(kek());
// // console.log(sayHiBye('kek', 'kok'));

// function counter() {
//     let number = 1;
//     return function getCount() {
//         return number+1;
//     }
// }

// let kek = counter();

// console.log(kek());
// console.log(kek());
// console.log(kek());

// function counter() {
//     let number = 1;
//     return function getCount() {
//         return number++;
//     }
// }

// let kek = counter();

// console.log(kek());
// console.log(kek());
// console.log(kek());

// for (let counter = 0; counter < 5; ++counter) {
//     console.log(counter);
// }

// let counter = 0;
// while (counter < 5) {
//     ++counter;
//     console.log(counter);
// }

// {
//     let i = 0;
//     console.log(i);
// }
// console.log(i);

// const obj = {
//     num: 2
// }

// function add(a){
//     return this.num + a;
// }

// const newFunc = add.bind(obj, 3);
// console.log(newFunc());

// const first = [1, 2, 3];
// const second = first;
// const moreNumbers = [4, 5, 6];

// first.push.apply(first, moreNumbers);
// const a = first;
// second.push(...moreNumbers);
// const b = second;

// console.log(first.slice(0, 6));
// console.log(second.slice(0, 6));

// console.log(first === second);

// 'use strict';
// const obj = {};

// Object.defineProperty(obj, 'foo', { value: 1, writable: false });
// obj.foo = 2;

// console.log(obj.foo);

// 'use strict';

// const obj = {};

// Object.preventExtensions(obj);
// obj.foo = 1;

// console.log(obj.foo);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterEven(num) {
//     return num % 2 === 0;
// }

// function square(num) {
//     return num * num;
// }

// function filterGreaterThanFifty(num) {
//     return num > 50;
// }

// const result = numbers.reduce(function (res, num) {
//     if (filterEven(num)) {
//         const squared = square(num);
//         if (filterGreaterThanFifty(squared)) {
//             res.push(squared);
//         }
//     }
//     return res;
// }, []);
  
// console.log(result);

// const kek = {1:'kok'};
// const kuk = 1;

// const isObject = (arg) => {
//     return typeof arg === "object";
// }

// console.log(isObject(kek));

// const kek = '';
// const kok = [kek];
// let filledRowsQuantity = 0;
// let counter = 0;

// while (counter < kok.length) {
//     if (kok[counter]) filledRowsQuantity += 1;
//     counter += 1;
// }

// console.log(filledRowsQuantity);

// const inputValue = '4';
// const val = inputValue >> 0;
// console.log(val);

// const uniq = (arr) => {
//     return arr.reduce((newArr, e) => {
//         if (!(newArr.includes(e))) newArr.push(e);
//         return newArr;
//     }, []);
// }
// console.log(uniq([9, 9, 3, 8, 8]));

// const getUserFriends = (json, counter) => {
//     const parsedJson = JSON.parse(json);
//     const friendsSet = new Set();
//     for (let i = 0; i < parsedJson.friends.length; i++) {
//         if (parsedJson.friends[i].includes(counter)) {
//             friendsSet.add(...(parsedJson.users.reduce((acc, elem) => {
//                 if (counter !== elem.id && parsedJson.friends[i].includes(elem.id)) acc.push(elem);
//                 return acc;
//             }, [])));
//         }
//     }
//     return [...friendsSet];    
// }
// const userJson = JSON.stringify({
//     users: [
//         { id: 1, name: 'John', age: 20 },
//         { id: 2, name: 'Mary', age: 21 },
//         { id: 3, name: 'Kek', age: 25 },
//     ],
//     friends: [
//         [2, 3], [2, 3], [1, 3]
//     ],
// });
// console.log(getUserFriends(userJson, 3));