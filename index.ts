// console.log('Hello, World!');

function repeat(text: string, count: number): string {
    let i: number = 0;
    const arr: Array<string> = new Array();
    while (i < count) {
        arr.push(text);
        i++;
    }
    return arr.join('');
}
console.log(repeat('a', 3));