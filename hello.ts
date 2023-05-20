// export function helloWorld() {
//     console.log("Hello, world!");
// }

// export function helloWorld2() {
//     console.log("Hello, world!");
// }

// namespace Company {
//     export function isEmployeeEmail(a:string, b:string): boolean {
//       return a.includes(b);
//     }
// }

// console.log(Company.isEmployeeEmail('user@example.com', 'hexlet.io'));

// const arr = [1, 2];
// const obj = { 'kek': 1 };

// function isPlainObject(response: unknown): boolean {
//     return Array.isArray(response) && typeof response === "object";
// }

// console.log(isPlainObject(obj));

// const arr = [1, 2, 3];
// function foo([x, y, z]: number[]) {
//     console.log(x, y, z);
// }
// foo(arr);

// const lessonsCount = ({ lessons }: { lessons: string[]}): number => {
//     return lessons.length;
// }
// const course = { lessons: ['intro', 'lala'] };
// console.log(lessonsCount(course));

// const numbers = [1, 2, 3];
// const args = [1, 2] as const;
// console.log(Math.max(...numbers));

// function concat(a: number, b: number): string;
// function concat(a: string, b: string): string;

// type Overloaded = {
//     (a: number, b: number): string;
//     (a: string, b: string): string;
// }

// const concat: Overloaded = (a: unknown, b: unknown): string => {
//     if (typeof a === 'number' && typeof b === 'number') {
//       return `${a.toFixed()}${b.toFixed()}`;
//     }
//     return `${a}${b}`;
// }
// console.log(concat('one', 'two'));
// console.log(concat(1, 2));

// function concat(a: number | string, b: number | string): string {
//     if (typeof a === 'number' && typeof b === 'number') {
//       return `${a.toFixed()}${b.toFixed()}`;
//     }
//     return `${a}${b}`;
// }
// console.log(concat('one', 'two'));
// console.log(concat(1, 2));

// function sayHello (name: string, surname?: string): string {
//     if (surname) {
//         return `Hello ${name} ${surname}`;
//     }
//     return `Hi ${name}`;
// }

// function sayHello(name: string): string;
// function sayHello(name: string, surname: string): string;

// function sayHello(name: unknown, surname?: unknown): string {
//     if (surname) {
//         return `Hello ${name} ${surname}`;
//     }
//     return `Hi ${name}`;
// }

// console.log(sayHello("John", "Doe"));
// console.log(sayHello("Elon"));

// const last = (arg: string | number): string | number => {
//     if (typeof arg === 'number') return Number(arg.toString()[arg.toString().length - 1]);
//     if (arg.length > 0) return arg[arg.length - 1];
//     return '';
// }

// console.log(last('hexlet'));
// console.log(last(12345));
// console.log(last(''));

// const uniq = (arr: (string | number)[]): (string | number)[] => {
//     const newArr: (string | number)[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!(newArr.includes(arr[i]))) newArr.push(arr[i]);
//     }
//     return newArr;
// }

// const uniq = (arr: (string | number)[]): (string | number)[] => {
//     const newArr: (string | number)[] = [];
//     arr.forEach((e) => {
//         if (!(newArr.includes(e))) newArr.push(e);
//     });
//     return newArr;
// }

// const uniq = (arr: (number | string)[]): (number | string)[] => {
//     return arr.reduce((newArr: (number | string)[], e: number | string): (number | string)[] => {
//         if (!(newArr.includes(e))) newArr.push(e);
//         return newArr;
//     }, []);
// }

// console.log(uniq([9, 9, 3, 8, 8]));

// type User = {
//     name: string;
// }
// const users: User[][] = [[{ name: 'Eva'}, { name: 'Adam' }]];
// const users: Array<Array<{name: string}>> = [[{ name: 'Eva'}, { name: 'Adam' }]];

// console.log(users);

// const getField = (count: number): null[][] => {
//     const outerArr: null[][] = [];
//     for (let i = 0; i < count; i++) {
//         const innerArr: null[] = [];
//         for (let j = 0; j < count; j++) {
//             innerArr.push(null);
//         }
//         outerArr.push(innerArr);
//     }
//     return outerArr;
// }

// console.log(getField(3));

// const kek = (arg1: {2: number}, arg2: {2: number}): number => arg1[2] + arg2[2];

// const numbers: readonly ({name: number})[] = [{name: 1}, {name: 2}];
// const numbers: ReadonlyArray<{name: number}> = [{name: 1}, {name: 2}];

// const args = [{2: 1}, {2: 2}] as const;

// numbers.push({name: 3});
// numbers[1].name = 3;
// console.log(numbers);

// console.log(kek(...args));

// console.log(typeof Object.keys(args[0]).pop());

// const obj = {js: 1};
// const objj = {js: 2};
// const map = new Map([[obj, 'JavaScript'], [objj, 'Cascading Style Sheets']])
// console.log(map.size)
// console.log(map.get(obj))

// const reverse = (arr: readonly (string | number)[]): (string | number)[] => {
//     const newArr: (string | number)[] = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(reverse([1, 2, 8]));

// const kek = (arg1: number[], arg2: number[]): number => arg1[0] + arg2[0];
// const point: readonly [[number], [number]] = [[1], [2]];
// console.log(kek(...point));
// const point: readonly [{name: string}, {name: string}] = [{name: 'kek'}, {name: 'kok'}];
// const point = [{name: 'kek'}, {name: 'kok'}] as const;
// point[1] = [3];
// point.push([1]);
// point[1][0] = 3;
// console.log(point);

// type Point = [number, number, number];
// const isTheSamePoint = (point1: Point, point2: Point): boolean => {
//     for (let i = 0; i < point1.length; i++) {
//         if (!(point1[i] === point2[i])) return false;
//     }
//     return true;
// }

// const p1: Point = [1, 3, 4];
// const p2: Point = [1, 3, 4];
// const p3: Point = [0, 8, 4];
// console.log(isTheSamePoint(p1, p2));
// console.log(isTheSamePoint(p1, p3));
// console.log(isTheSamePoint(p2, p3));

// function sum(a: number[], b: number[]): number {
//     return a[0] + b[0];
// }
// const numbers: readonly number[][] = [[1], [2]];
// numbers[1][0] = 3;
// console.log(numbers);
// sum(...args);