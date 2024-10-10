//Тема: Spread
// Напишіть функцію, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.


let firstArr = [2,34,67,3,];
let secondArr = [4,5,89,23];
let newArr =[...firstArr,...secondArr];
console.log(newArr);





// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

function restTest(...args) {
    console.log(args);
}

restTest('Bob',[2456, 2308, 4421] );


// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function numbersValue(...args) {
    console.log(args);   
    console.log(args.length);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
         sum += args[i];
       
    }
 console.log(sum/args.length);

}
numbersValue(4,8,12,6);



// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.



console.log(`Type ${typeof 'Mihael' }`);
console.log(`Type ${typeof 78}`);
console.log(`Type ${typeof true}`);
console.log(`Type ${typeof undefined}`);
console.log(`Type ${typeof [6,8.90]}`);

let key = Symbol('Next');
console.log(`Type ${typeof key}`);

const fnHello =()=>'Hello'
console.log(`Type ${typeof fnHello}`);


// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

let simpleValue = 'Monica';
let numb = 35;

function checkValue(value) {
    console.log(`This type ${ typeof value}`);
    
}
checkValue(34);
checkValue(simpleValue);
checkValue(numb);
checkValue(undefined);
checkValue(null);
checkValue(checkValue);




// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік

// Виведіть результат у консоль.
// let ageValue = prompt('enter your age')


 let yearNow = 2024;

function getUserBirthdayYear(value) {

console.log(yearNow-value);
    
}
getUserBirthdayYear(19);



// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

let nowDate =new Date();
console.log(nowDate);
console.log(`This day ${ nowDate.toLocaleString()}`);




// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

let text = 'Hello my dear friends!'
console.log(text);

let newText = text.split(', ');

console.log(newText.toString().toUpperCase());


