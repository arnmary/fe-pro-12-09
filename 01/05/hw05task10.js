//Дано масив чисел видаліть найбільший елемент з масиву

let numberArray =[1,40,56,2,100,36,1100,24,18];

numberArray.sort((a,b)=>a-b);
console.log(numberArray);
numberArray.pop();
console.log(numberArray);



