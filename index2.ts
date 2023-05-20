// const moderator = {
//     firstName: 'Danil',
//     lastName: 'Polovinkin',
//     type: 'moderator',
//     email: 'danil@polovinkin.com'
// }
// const formatUser = (user: { type: string, firstName: string, lastName: string }): string => [user.type, ':', user.firstName, user.lastName].join(' ');
// console.log(formatUser(moderator));

// type UnionUser = {
//     username: string;
//     password: string;
// } | {
//     type: string;
// }
// const user: UnionUser = { username: 'test', type: 'user' }

// type Id<T extends string> = T;
// type FooId = Id<'foo'>;
// type BarId = Id<'bar'>;
// let foo: FooId;
// let bar: BarId;
// foo = 'fo' as FooId;
// bar = 'ba' as BarId;
// foo = bar; // error: not assignable
// let str: string;
// str = foo;

// type Id<T extends string> = T;
// type FooId = Id<'foo'>;
// type BarId = Id<'bar'>;
// let foo: FooId = 'foo';

// enum FooIdBrand { _ = "" };
// type FooId = FooIdBrand & string;
// enum BarIdBrand  { _ = "" };
// type BarId = BarIdBrand & string;
// let fooId: FooId;
// let barId: BarId;
// fooId = 'foo' as FooId;
// barId = 'bar' as BarId;
// barId = fooId; // error: not assignable
// let str: string;
// str = fooId; // ok

// enum FooIdBrand { _ = 1 };
// type FooId = FooIdBrand & number;
// enum BarIdBrand { _ = 1 };
// type BarId = BarIdBrand & number;
// let fooId: FooId;
// let barId: BarId;
// fooId = 1 as FooId;
// barId = 2 as BarId;
// barId = fooId; // error: not assignable
// let num: number;
// num = fooId; // ok

// enum LoadingStatus {
//     success,
//     error = 'error',
//     loading = 'loading...',
// }
// type DataState = { status: LoadingStatus, error?: Error, data?: number };
// const handleData = (arg: DataState): string => {
//     const data = arg.data ? arg.data.toString() : 'unknown';
//     return typeof arg.status === 'string' ? arg.status : data;
// }
// const loading: DataState = { status: LoadingStatus.loading };
// console.log(handleData(loading)); // loading...
// const error: DataState = { status: LoadingStatus.error, error: new Error('error') };
// console.log(handleData(error)); // error
// const success: DataState = { status: LoadingStatus.success, data: 42 };
// console.log(handleData(success)); // 42

// type Formatter = (val: string) => string;
// const formatToConcrete: Formatter = (): 'test' => 'test';
// const formatToNumber: Formatter = (val: '1') => val; // Error!

// type Transaction = {
//     apply: (amount: number) => number,
// }
// type Wallet = {
//     balance: number,
//     transactions: Transaction[],
// }
// const applyTransactions = (wallet: Wallet): number => {
//     const backup: number = wallet.balance;
//     try {
//         return wallet.transactions.reduce((accum, element) => {
//             return Object.values(element).reduce((acc, elem) => {
//                 try {
//                     return elem(accum);
//                 } catch {
//                     throw new Error();
//                 }
//             }, accum);
//         }, wallet.balance);
//     } catch {
//         return backup;
//     }
// }
// const wallet: Wallet = {
//     transactions: [
//         {
//             apply: (amount) => amount + 2,
//         },
//         {
//             apply: (amount) => amount + 2,
//         },
//     ],
//     balance: 0
// }
// console.log(applyTransactions(wallet));

// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//     }
//   }
//   const p = new Point(10, 20);
//   console.log(p);

//   class Point {
//     x: number = 10;
//     y: number = 20;
//   }
//   const p = new Point();
//   console.log(p);

// class File {
//     name: string;
//     size: number;
  
//     constructor(obj: { name: string, size: number }) {
//         this.name = obj.name;
//         this.size = obj.size;
//     }
  
//     toString(): string {
//         return `${this.name} (${this.size.toString()} bytes)`;
//     }
// }

// class Fil {
//     name: string;
//     size: number;
//     isCopy?: boolean;
  
//     constructor(options: Fil) {
//         this.name = options.name;
//         this.size = options.size;
//         if (options instanceof Fil) {
//             this.isCopy = true;
//         }
//     }
  
//     toString() {
//         return [this.isCopy && '(copy)', this.name, `(${this.size} bytes)`].filter(Boolean).join(' ');
//     }
// }

// class Fil {
//     name: string;
//     size: number;
//     isCopy?: boolean;
  
//     constructor(options: Fil) {
//         this.name = options.name;
//         this.size = options.size;
//         if (options instanceof Fil) {
//             this.isCopy = true;
//         }
//     }
  
//     toString() {
//         return [this.isCopy && '(copy)', this.name, `(${this.size} bytes)`].filter(Boolean).join(' ');
//     }
// }

// const file = new Fil({ name: 'open-world.jpeg', size: 1000 });
// console.log(file.toString());
// const file2 = new Fil(file);
// console.log(file2.toString());
// const file3 = new Fil(file2);
// console.log(file2.toString());