// Створіть функцію, яка приймає два масиви: масив імен та масив віків. Функція повинна повернути масив об'єктів, де кожен об'єкт представляє користувача з ім'ям і віком.
//let names = ['Оля', 'Іван', 'Марія'];
//let ages = [25, 30, 22];

let names = ['Оля', 'Іван', 'Марія'];
let ages = [25, 30, 22];
let newArrey = [];

    names.length =ages.length
    for (let i = 0; i < names.length; i++) {
     let  item = names[i]  +  ages[i];
    newArrey.push(item) ;
 
    } 


console.log(newArrey);
