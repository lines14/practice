// export function helloWorld() {
//     console.log("Hello, world!");
// }

// export function helloWorld2() {
//     console.log("Hello, world!");
// }

namespace Company {
    export function isEmployeeEmail(a:string, b:string): boolean {
      return a.includes(b) ? true : false
    }
}

console.log(Company.isEmployeeEmail('user@example.com', 'hexlet.io'));