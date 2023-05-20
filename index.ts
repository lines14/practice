// console.log('Hello, World!');

// function repeat(text: string, count: number) {
//     let i = 0;
//     const arr = new Array();
//     while (i < count) {
//         arr.push(text);
//         i++;
//     }
//     return arr.join('');
// }
// console.log(repeat('a', 4));

// function getGreetingPhrase(name?: string) {
//     return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
// }
  
// console.log(getGreetingPhrase('Mike'));
// console.log(getGreetingPhrase());

// let arr = [1, 'kek'];
// console.log(arr);

// const getHiddenCard = (a: string, b = 4): string => {
//     return `${'*'.repeat(b)}${a.slice(12)}`;
// }

// console.log(getHiddenCard('1234567812345678'));

// const fruits = ['banana', 'mango', 'apple'];
// const upperFruits = fruits.map((name) => name.toUpperCase());
// console.log(upperFruits);

// const numbers = [1, 3, 8, 9, 100, 23, 55, 34];
// const even = numbers.filter(num => num%2 === 0);
// console.log(even);

// const fruits: (string | number)[] = ['banana', 1, 'apple'];

// function toUpperArray(items: Array<string>): Array<string> {
//     return items.map((s) => s.toUpperCase());
// }

// console.log(fruits);

// const filterAnagrams = (a: string, b: string[]): string[] => {
//     const list = a.split('').sort().join();
//     return b.filter(element => element.split('').sort().join() === list);
// }

// console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

// function isComplete(obj: {name: string, lessons: string[]}): boolean {
//     return obj.lessons.length >= 4 ? true : false; 
// }

// const course = {
//     name: 'Java',
//     lessons: ['variables', 'functions', 'conditions', 'kek'],
// };
// console.log(isComplete(course));

// enum OrderStatus {
//     Created,
//     Paid,
//     Shipped,
//     Delivered,
// }
    
// const order = {
//     items: 3,
//     status: OrderStatus.Paid,
// }

// console.log(order.status)

// enum ModalStatus {
//     Opened,
//     Closed,
//   }
  
//   function buildModal(text: string, status: ModalStatus): { text: string; status: ModalStatus } {
//     return {
//       text,
//       status,
//     };
// }

// const modal = buildModal('hexlet forever', ModalStatus.Opened);
// console.log(modal)
    
// type user = { name: string, age: number };

// function getOlderUser(a: user, b: user): user | null {
//     return a.age === b.age ? null : a.age>b.age ? a : b
// }

// const user1 = { name: 'Petr', age: 10 };
// const user2 = { name: 'Kek', age: 10 };

// console.log(getOlderUser(user1, user2));

// function getParams(a: string): any {
//     const obj: any = new Object();
//     const b = a.split('&');
//     for (let i = 0; i< b.length; i++) {
//         const c = (b[i]).split('=');
//         obj[(c[0])] = c[1];
//     }
//     return obj;
// }

// console.log(getParams('per=10&page=5'));
// console.log(getParams('name=hexlet&count=3&order=asc'));

// import * as kek from './hello';

// kek.helloWorld2();

// function filter(a: number[], b: (c: number) => boolean) {
//   return a.filter(e => b(e));
// }

// const numbers = [1, -5, 2, 3, 4, 133];

// console.log(filter(numbers, (n) => n > 3))

// function map(a: number[], b: (c: number, index: number) => number) {
//     return a.map((e, i) => b(e, i));
// }

// console.log(map([3, 9], (n) => n - 3));

// function kek(): void {
//     console.log('kek');
// }

// kek();

// function forEach(a: number[], b: (c: number, index: number) => void) {}

// forEach([8, 9], (n, index) => console.log(index + n));

// const fruits: string[] = ['banana', 'mango', 'apple'];
// const upperFruits: string[] = fruits.map((name: string): string => name.toUpperCase());
// console.log(upperFruits);

// const obj: { [key: string]: any } = {};
// obj.kek = "value";
// obj.kok = 88;

// console.log(obj);

// interface MyType extends Record<string,any> {
//     prop1: string,
//     prop2?: number,
// }

// const obj: MyType = { prop1: 'kek'};
// obj.prop2 = 5;
// obj.prop3 = [1, 2, 3];

// console.log(obj);

// type Numberify = (arr: string[]) => string;
// const numberify: Numberify = (arr) => arr[0];
// const list: string[] = ["1", "2", "3"];
// console.log(numberify(list));

// const numbers = [1, 2, 3];
// const result = [];

// const mapper = (arr: number[]): void => {
//     for (let i of arr) {
//         result.push(i);
//     }
// }

// console.log(mapper(numbers));

// let kek: undefined | null = null;
// kek = undefined;
// console.log(kek);

// import { Animal } from './animal';
// const kekReader = (): void => {
//     Animal.voice();
// }

// kekReader();

// function upperize(target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
//     descriptor.value = function(arg: string): string {
//         return arg.toUpperCase();
//     }
// }
// class Cat {
//     @upperize
//     static kek(name: string): string {
//         return name;
//     }
// }

// console.log(Cat.kek('hello'));