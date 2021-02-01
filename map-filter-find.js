// const students = [
//     { id: 31, name: "Omor Sunny" }, { id: 41, name: "Manna" }, { id: 36, name: "Moyuri" }, { id: 52, name: "Dipjol" }
// ];

// const output = [];
// const outputId = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const nameArry = element.name;
//     output.push(nameArry);
//     const idArry = element.id;
//     outputId.push(idArry);
// }
// console.log(output);
// console.log(outputId);


// (using map)
const workers = [
    { id: 43, name: "kalam" }, { id: 35, name: "namir" }, { id: 48, name: "jubed" }, { id: 50, name: "ali" }
];

const workersName = workers.map(w => w.name);
console.log(workersName);
const workersId = workers.map(idNumber => idNumber.id);
console.log(workersId);

// find id upto 45 (using filter)
const bigWorkers = workers.filter(upto => upto.id > 45);
console.log(bigWorkers);

// using Find 
const workerFind = workers.find(idUpto => idUpto.id > 45);
console.log(workerFind);