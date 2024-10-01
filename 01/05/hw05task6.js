//Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
// Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let enthArr = new Array(10);

//1
enthArr.fill('Super');
console.log(enthArr);


//2
function addItems(args) {
  let test = enthArr.fill('&&&',2); 

}

addItems();
console.log(enthArr);



