// hw03addtask1:
//Перевірка величини кута:

// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.


let angleValue = prompt('Type angle value in degrees');
let typeValue ='';

 typeValue = angleValue<90 ?'this is a sharp angle':'this is an obtuse angle';
console.log(`${typeValue}`);
