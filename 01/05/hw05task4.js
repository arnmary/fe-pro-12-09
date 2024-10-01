//unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let newArr = ['Wildcat','Difujn','Sacura','Schilleriana','Stuartiana' ];


//1
newArr.unshift('Sogo');

console.log(newArr);


//2
function addItems(array) {
    console.log(array);
    let test = newArr.unshift('Scention');
    console.log(test);
    
    
}
addItems();
console.log(newArr);
