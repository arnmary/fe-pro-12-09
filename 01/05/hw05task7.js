//reverse:
// Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let newArr = [1,'Stive', 2, 'Diana', 3, 'Tom', 4, 'Martyn'];
console.log(newArr);

//1
newArr.reverse();
console.log(newArr);

//2
function revArrey(args) {
    let test = newArr.reverse();
    console.log(test);
}
revArrey();
console.log(newArr);

revArrey();
console.log(newArr);


