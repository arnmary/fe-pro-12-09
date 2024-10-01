//Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.


//1
let myArr = [1,4,56,'Hello','Darina',true];
myArr.pop();
myArr.pop();
myArr.pop();
myArr.pop();
console.log(myArr);


//2
let mySecondArr = ['cat', 4, true,'dog', 78, ];
function delItem(arrey) {
    mySecondArr.pop();
}
delItem();
console.log(mySecondArr);
