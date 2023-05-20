// const lastIndex = (str: string, char: string): number | null => {
//     const arr: string[] = str.split('');
//     let charIndex: number | null = null;
//     arr.forEach((element, index) => {
//         if (element === char) charIndex = index;
//     });
//     return charIndex;
// }

// const str = 'test';
// console.log(lastIndex(str, 't'));

// const formatPrice = (arg?: number | null): string => {
//     if (arg && typeof arg === 'number') {
//         const stringify: string = arg.toString();
//         if (stringify.includes('.')) {
//             const splicedArg: string[] = stringify.split('.');
//             const splicedAfterDot: string[] = splicedArg[1].split('');
//             splicedAfterDot.splice(2, 0, '.');
//             const numberified: number = Number(splicedAfterDot.join(''));
//             const rounded: string = Math.round(numberified).toString();
//             splicedArg[1] = rounded;
//             const stringified: string = splicedArg.join('.');
//             return '$' + stringified;
//         }
//         return '$' + stringify + '.00';
//     }
//     return '$0.00';
// }
// console.log(formatPrice(3.145));
// console.log(formatPrice(200));
// console.log(formatPrice());
// console.log(formatPrice(null));

// enum OrderStatus {
//     Created = 'created',
//     Paid = 'paid',
//     Shipped = 'shipped',
//     Delivered = 'delivered',
// }
// const kek: OrderStatus = OrderStatus.Created;
// console.log(kek);

// type OrderStatus = 'created' | 'paid' | 'shipped' | 'delivered';
// const kek: OrderStatus = 'created';
// console.log(kek);

// enum OrderStatus {
//     Created,
//     Paid,
//     Shipped,
//     Delivered,
// }

// const order = {
//     items: 3,
//     status: OrderStatus.Created,
// }

// console.log(order.status)

// const kek: OrderStatus = OrderStatus.Created;
// console.log(kek);

// const args = [1, 2] as const;
// console.log(typeof args);

// const ormConfig = {
//     type: 'mysql',
//     host: 'localhost',
//     port: 5432,
// } as const;
// console.log(ormConfig.type);

// const foo: 'Hello' = 'Hello';

// const iTakeFoo = (foo: 'foo'): void => console.log(foo); 
// const test = {
//     someProp: 'foo' as 'foo'
// }
// iTakeFoo(test.someProp);

// function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
//     return o.reduce((res, key) => {
//         res[key] = key;
//         return res;
//     }, Object.create(null));
// }

// const Direction = strEnum(['North', 'South', 'East', 'West']);
// type Direction = keyof typeof Direction;
// console.log(Direction);

// function strEnum<typesList extends string>(arg: Array<typesList>): {[elem in typesList]: elem} {
//     return arg.reduce((res, key) => {
//         res[key] = key;
//         return res;
//     }, Object.create(null));
// }

// type TypeGenerator = <NewType extends string>(...arg: NewType[]) => Record<NewType, NewType>;
// const enumStr: TypeGenerator = (...arg) => {
//     return arg.reduce((obj, key) => {
//         obj[key] = key;
//         return obj;
//     }, Object.create(null));
// }
// const enumDirection = enumStr('North', 'South', 'East', 'West');
// type Direction = keyof typeof enumDirection;
// let sample: Direction;
// sample = enumDirection.North;
// sample = 'North';
// sample = 'AnythingElse';

// const startGame = () => {
//     const state: ('turtle' | null)[] = ['turtle', null, null, null, null];
//     const makeTurn = (direction: 'left' | 'right') => {
//         const turtlePosition = state.indexOf('turtle');
//         if (direction === 'right') {
//             if (turtlePosition !== 4) {
//                 state[turtlePosition] = null;
//                 state[turtlePosition + 1] = 'turtle';
//             } else {
//                 throw new Error('ERROR');
//             }
//         } else {
//             if (turtlePosition !== 0) {
//                 state[turtlePosition] = null;
//                 state[turtlePosition - 1] = 'turtle';
//             } else {
//                 throw new Error('ERROR');
//             }
//         }
//     }
//     return { makeTurn, state };
// }

// const gameOn = startGame();
// console.log(gameOn.state);
// gameOn.makeTurn('right');
// gameOn.makeTurn('right');
// gameOn.makeTurn('right');
// gameOn.makeTurn('right');
// console.log(gameOn.state);

// type SinglyLinkedList = {
//     value: number;
//     next: SinglyLinkedList | null;
// }
// interface DoubleLinkedList extends SinglyLinkedList {
//     next: DoubleLinkedList | null;
//     prev: DoubleLinkedList | null;
// }
// const reverseDoubleLinkedList = (list: DoubleLinkedList): void => {
//     const temp = list.prev;
//     list.prev = list.next;
//     list.next = temp;
//     if (list.prev !== null) {
//         reverseDoubleLinkedList(list.prev);
//     }
// }
// const list: DoubleLinkedList = {
//     value: 1,
//     next: null,
//     prev: null,
// }
// const list2: DoubleLinkedList = {
//     value: 2,
//     next: null,
//     prev: null,
// }
// list.next = list2;
// list2.prev = list;
// reverseDoubleLinkedList(list);
// console.log(list.prev === list2);
// console.log(list2.next === list);

// type Form = {
//     age: {
//         value: number,
//         validator: (val: number) => boolean
//     },
//     name: {
//         value: string,
//         validator: (val: string) => boolean
//     }
// }
// const form: Form = {
//     age: {
//         value: 1,
//         validator: function (val) {
//             return typeof val === 'undefined';
//         }  
//     },
//     name: {
//         value: '1',
//         validator: function (val) {
//             return typeof val !== 'undefined';
//         }
//     }
// }
// console.log(form.name.validator(form.name.value));
// console.log(form.age.validator(form.age.value));

// var foo = Object.create(null);
// foo.bar = 123;
// foo.bas = 'hello';
// console.log(typeof foo.bas);
// const foo = <0>0;
// console.log(typeof foo);

// type User = {
//     id: number,
//     name: string,
//     age: number,
// }
// type Friends = [number, number];
// type UserResponse = {
//     users: User[],
//     friends: Friends[]
// }
// const getUserFriends = (json: string, counter: number): User[] => {
//     const parsedJson: UserResponse = JSON.parse(json);
//     let friendsList: User[] = [];
//     for (let i = 0; i < parsedJson.friends.length; i++) {
//         if (parsedJson.friends[i].includes(counter)) {
//             friendsList.push(...(parsedJson.users.reduce((acc, elem) => {
//                 if (counter !== elem.id && parsedJson.friends[i].includes(elem.id)) acc.push(elem);
//                 return acc;
//             }, [] as User[])));
//         }
//     }
//     const friendsSet = new Set(friendsList);
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
// console.log(getUserFriends(userJson, 1));