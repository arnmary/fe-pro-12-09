//Напишіть функцію, яка приймає масив чисел, видаляє всі повторювані елементи, сортує залишки за спаданням і видаляє найбільший елемент

let numbersArray = [2, 55, 44, 48, 86, 99, 1001, 44, 55, 99, 44];
console.log(numbersArray);

let newArr = [];
function delSimNum(arr) {
    for (let i = 0; i < arr.length; i++) {
   if (!newArr.includes(arr[i])) {
 newArr.push(arr[i]);
   }
    }  
    newArr.sort((a,b)=>b-a);
    console.log(newArr);
   newArr.shift();
    return newArr;
}

console.log(newArr);

console.log(delSimNum(numbersArray));
