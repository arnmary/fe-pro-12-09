//Напишіть функцію, яка приймає масив чисел, видаляє всі повторювані елементи, сортує залишки за спаданням і видаляє найбільший елемент

let numbersArray = [2, 55, 44, 48, 86, 99, 1001, 44, 55, 99, 44];
console.log(numbersArray);

// numbersArray.sort((a,b)=> a+b);
numbersArray.sort( (a,b)=> a-b);

console.log(numbersArray);
delete numbersArray



function delSimNum(a,b) {
    for (let i = 0; i < numbersArray.length; i++) {
   if (a=b) {
   return delete numbersArray[i];
   }
    }  
}
delSimNum(2,55);
console.log(delSimNum);
console.log(numbersArray);

// numbersArray.reverse()
// console.log(numbersArray);