//Напишіть функцію, яка приймає два масиви чисел, об'єднує їх, сортує у порядку зростання і видаляє останні 4 елементи.

let firstArray = [22, 54, 67, 82, 1, 99, 1005];
let secondArray = [5, 78, 34, 96, 4];

  firstArray= firstArray.concat(secondArray);
    console.log(firstArray);
    firstArray.sort((a,b)=> a-b);
    console.log(firstArray);
    console.log(firstArray.length);
    
    firstArray.pop();
    firstArray.pop();
    firstArray.pop();
    firstArray.pop();
   
console.log(firstArray);
