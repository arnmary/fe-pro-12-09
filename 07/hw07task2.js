//Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (let value of students) {
    console.log(`Name: ${value.name} age: ${value.age} grade: ${value.grade}`);
     
}