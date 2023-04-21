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


let userAdmin = {
  admin() {
    console.log("Я админ");
  }
};

let userGuest = {};

userAdmin.admin(); // Я админ

userGuest.admin?.(); // ничего не произойдет (такого метода нет)