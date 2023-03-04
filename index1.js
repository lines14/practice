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

function repeat(text, count) {
    let i=0;
    const arr = new Array();
    while (i<count) {
        arr.push(text);
        i++;
    }
    return arr.join('');
}
console.log(repeat('a', 3));