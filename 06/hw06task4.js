//Створіть функцію, яка приймає масив чисел, фільтрує ті, що більше 10, і повертає новий масив, що містить перші три елементи результату.

let numbersArr = [12,2,3,5,56,78,9,25,17];

let newArr = numbersArr.filter((number)=> 
  number>10
 );

 console.log(newArr);
 let uniqArr =newArr.splice(0,3);

 console.log(uniqArr);


 //Створіть функцію, яка приймає масив і два індекси, і повертає новий масив, що містить елементи між цими індексами, у зворотньому порядку.
 let secondNumbersArr = numbersArr.splice(1,6);
 secondNumbersArr.sort((a,b)=> b-a);
console.log(secondNumbersArr);


 //Створіть функцію, яка приймає масив чисел, фільтрує парні числа, а потім повертає новий масив, де кожне парне число помножене на 2.
let myArr =[4,57,18,24,100];
 console.log(myArr);
 

let evenNumbers = myArr.filter((number)=> number % 2==0);
let squareNumbers =evenNumbers.map((item)=>{return item*2} )

console.log(evenNumbers);
console.log(squareNumbers);
