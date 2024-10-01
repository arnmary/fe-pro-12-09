//Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let prodArr = ['Watermelon','Banana','Orange','Peach'];

//1
prodArr.shift();
console.log(prodArr);

//2

function delItem(array) {
    let test = prodArr.shift();
    console.log(test);
    
}
delItem();
console.log(prodArr);
