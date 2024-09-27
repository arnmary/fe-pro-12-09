
// Створити пустий массив і заповнити його всіма парними 
// занченнями від 0 до 8

console.log('==Array==');

let emptyArray = [,,,,];

console.log(emptyArray.length);
for (let i = 0; i <=8; i+=2) {
 emptyArray.push(i)
  
}
console.log(emptyArray);


