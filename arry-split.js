const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const sliceNumber = numbers.slice(3, 8);
console.log(sliceNumber);

const spliceNumber = numbers.splice(3, 6);
console.log(spliceNumber);

const joinNumber = numbers.join(" "); //" ", ":", "," etc
console.log(joinNumber);

console.log(numbers);